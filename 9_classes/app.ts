class Agent {
    name: string;
    type: string;
    ultPoints: number;
    constructor(name: string, type: string, ultPoints: number) {
        this.name = name;
        this.type = type;
        this.ultPoints = ultPoints;
    }
    ultar() {
        return `Você possui ${this.ultPoints}, pode ultar!`
    }
}

let Sage = new Agent('Sage', 'Sentinel', 8);
console.log(Sage);


