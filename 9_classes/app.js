var Agent = /** @class */ (function () {
    function Agent(name, type, ultPoints) {
        this.name = name;
        this.type = type;
        this.ultPoints = ultPoints;
    }
    Agent.prototype.ultar = function () {
        return "Voc\u00EA possui ".concat(this.ultPoints, ", pode ultar!");
    };
    return Agent;
}());
var Sage = new Agent('Sage', 'Sentinel', 8);
console.log(Sage);
