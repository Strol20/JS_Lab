
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

function introspection(object){
    const result = [];
    for (const key in object) {
      if (typeof object[key] == "function") {
        result.push([key, object[key].length]);
      }
    }
    return result

}

console.log(introspection(iface));