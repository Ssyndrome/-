//!!!垃圾回收机制。
function createPerson(name) {
    let localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}
let globalPerson = createPerson('jose');
console.log(globalPerson)