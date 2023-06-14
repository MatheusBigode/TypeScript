function message<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

console.log(message('Salve!'));
console.log(message(12345));

