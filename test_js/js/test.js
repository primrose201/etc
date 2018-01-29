function TestReturn(name) {
    this.name = name;

    return 1;
}
TestReturn.prototype.call = function() {return this.name;}

result = new TestReturn('test');

console.log(result);