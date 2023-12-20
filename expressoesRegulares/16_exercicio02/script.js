const id = /\d+ID\b/; // O b significa que a string terminara com ID

console.log(id.test("55"))
console.log(id.test("555545ID"))
console.log(id.test("55id"))
