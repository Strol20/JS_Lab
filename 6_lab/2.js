/**
 * Реализует безопасную композицию функций справа налево (composeRightSafe).
 * Подавляет ошибки (возвращает undefined) и позволяет подписаться на них.
 *
 * @param {...Function} fns Функции для композиции.
 * @returns {Function} Композированная функция с методом .on('error', listener).
 */
function composeRightSafe(...fns) {
    const errorListeners = new Set();
    
    // Композированная функция, которая будет выполнять функции справа налево
    const composed = async function (...args) {
        let result;
        
        // Начинаем с аргументов, переданных в композированную функцию
        // (Предполагаем, что первая функция (крайняя справа) принимает аргументы из ...args)
        let currentResult = args.length === 1 ? args[0] : args;

        // Итерируем функции справа налево (обратный порядок)
        for (let i = fns.length - 1; i >= 0; i--) {
            const fn = fns[i];
            
            try {
                // Если fn — не функция, здесь мы ее не обрабатываем,
                // но в реальном коде это должна быть ошибка, которую бы перехватил catch.
                // В этом примере предполагаем, что переданы только функции.
                if (typeof fn !== 'function') {
                     throw new TypeError(`Argument at index ${i} is not a function.`);
                }
                
                // Передача результата: если это массив (для первой функции), 
                // то вызываем с оператором spread; иначе — как один аргумент.
                const fnArgs = Array.isArray(currentResult) && i === fns.length - 1 ? 
                    currentResult : [currentResult];

                // Вызываем функцию и ожидаем результат (для поддержки async/await)
                result = await fn(...fnArgs); 
                
                // Обновляем текущий результат для следующей функции
                currentResult = result;
                
            } catch (error) {
                // Если произошла ошибка:
                
                // 1. Уведомляем всех подписчиков
                errorListeners.forEach(listener => {
                    try {
                        listener(error);
                    } catch (listenerError) {
                        console.error('Error in error listener:', listenerError);
                    }
                });
                
                // 2. Прекращаем выполнение композиции и возвращаем undefined
                return undefined;
            }
        }
        
        // Возвращаем конечный результат
        return result;
    };
    
    // Добавляем метод on для подписки на ошибки
    composed.on = function (eventName, listener) {
        if (eventName === 'error' && typeof listener === 'function') {
            errorListeners.add(listener);
        }
        // Возвращаем функцию для отписки (полезная возможность)
        return () => errorListeners.delete(listener);
    };

    return composed;
}

const addThree = (x) => x + 3;
const riskyFn = (x) => {
    if (x > 10) {
        throw new Error(`Risky function failed: Value ${x} is too high!`);
    }
    return x * 2;
};
const toString = (x) => String(x);

// Композиция: toString(riskyFn(addThree(x)))
const g = composeRightSafe(
    toString, // 3. Последняя
    riskyFn,  // 2. Средняя
    addThree  // 1. Первая (крайняя справа)
);

// Подписка на ошибки
g.on('error', (e) => {
    console.error('**[HANDLER]** ОШИБКА ПЕРЕХВАЧЕНА:', e.message);
});

// --- Тест 1: Успешное выполнение (x=1) ---
// addThree(1) -> 4; riskyFn(4) -> 8; toString(8) -> "8"
console.log('\n--- Test 1 (Success) ---');
g(1).then(result => {
    console.log('Результат 1:', result); // Output: "8"
});

// --- Тест 2: Выполнение с ошибкой (x=5) ---
// addThree(5) -> 8; riskyFn(8) -> 16. Ошибка не брошена (16 > 10 ложно).
// addThree(5) -> 8; riskyFn(8) -> 16; toString(16) -> "16"
// *** ОШИБКА В РЕАЛЬНОМ ПРИМЕРЕ ***
// Скорректируем riskyFn, чтобы ошибка срабатывала:
const riskyFn2 = (x) => {
    if (x > 5) { // Если входное значение больше 5, бросаем ошибку
        throw new Error(`Risky function failed: Value ${x} is too high!`);
    }
    return x * 2;
};

const h = composeRightSafe(
    toString, // 3.
    riskyFn2, // 2.
    addThree  // 1.
);

h.on('error', (e) => {
    console.error('**[HANDLER H]** ОШИБКА ПЕРЕХВАЧЕНА:', e.message);
});

console.log('\n--- Test 2 (Error) ---');
h(3).then(result => {
    // 1. addThree(3) -> 6
    // 2. riskyFn2(6) -> ОШИБКА (6 > 5)
    console.log('Результат 2:', result); // Output: undefined
});