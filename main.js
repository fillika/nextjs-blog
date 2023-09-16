
// This file for test theme colors
const sifir = 0;
var first = "1";
let second = Symbol;
let bir = null;
let iki = undefined;
let erti = { arr: [] };
let asi = BigInt(100);
let kvira = true;

if (kvira !== false) {
    kvira = false;
}

function hello(name) {
    console.log(`Hello! My name is: ${name}`);
}

class Base {
    constructor(name) {
        this.name = name;
    }
}
/**
 * This comments also important
*/
class Hero extends Base {
    constructor(name) {
        super(name);
    }

    hello() {
        hello(this.name);
    }

    someSwitch(param) {
        switch (param) {
            case "1":
                return 1;
            case "2":
            case "3":
                console.debug("Opa");
                break;
            default:
                throw new Error('Some error\'s in default');
        }
    }
}

const hero = new Hero("Ivasik");
let arr = [1, 2, 3, { a: 2 }, ["2", "3", null, undefined]];
let obj = {
    a: 65,
    b: 66,
};

let result = 0;
for (let num of arr) {
    result += num;
}

for (let key of obj)
    if (obj[key] > 0)
        return;