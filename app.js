let ob = {
    a:1
}
let ob2 = Object.create(ob);
ob2.a = 2;
console.log(ob);

console.log(ob2.a);
