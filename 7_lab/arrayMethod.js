//#1--------

function removeElement(arr, component){
    let index = 0;
    for(curentElement of arr){
        if(component == curentElement){
        arr.splice(index, 1)
        }
        index++;
    }
}

const arraya = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(arraya, 'Lima'); // удалит 'Lima' из массива
removeElement(arraya, 'Berlin'); // не удалит ничего
console.log(arraya);
// Результат: ['Kiev', 'Beijing', 'Saratov']

// #2--------

function removeElementsBetter(...arg){
    arr = arg[0]
    removArr = [];
    index1 = 1;
    while(arg.length != index1){
        removArr.push(arg[index1]);
        index1++;
    }

    index2 = 0;
    for(curentElementArg of arr){
        for(curentElementRemove of removArr){
            if(curentElementRemove == curentElementArg){
            arr.splice(index2, 1)
            }
        
        }
        index2++;  
    }


}

const arrayb = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElementsBetter(arrayb, 'Lima', 'Berlin', 'Kiev');
console.log(arrayb);
// Результат: ['Beijing', 'Saratov']

//#3--------
function unique(arr){
    const uniqArr = []
    uniqArr.push(arr[0])
    let index = 0;
    let indexUniq = 0;
    for(curentElement of arr){
        indexUniq = 0;
        for(curentElementUniq of uniqArr){
            indexUniq++;
            if(curentElementUniq == curentElement){
                break;
            }
            if (indexUniq == uniqArr.length){
                uniqArr.push(curentElement)
            }
            
        }
        index++;
    }
    return uniqArr
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

// Результат: [2, 1, 3]

//#4--------

function difference(array1, array2){
    let index = 0;
    let indexUniq = 0;
    for(curentElement of array1){
        indexUniq = 0;
        for(curentElementUniq of array2){
            indexUniq++;
            if(curentElementUniq == curentElement){
                array1.splice(index, 1)
                break;
            }
        }
        index++;
    }
    return array1
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result4 = difference(array1, array2);
console.log(result4);
// Результат: [7, -2, 5]