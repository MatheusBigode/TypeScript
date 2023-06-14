

class Dad {
    greet() {
        console.log("Hi!");
    }
}

class Son extends Dad {
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
    reply() {
        console.log('Hi, daddy!');      
    }
}