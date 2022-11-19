const Manager = require("../lib/Manager");

test("Can create a new Employee?",() => {
const t1 = new Manager('Alan', 'alan@email.com',123, 999)
expect(t1.name).toEqual('Alan');
expect(t1.id).toEqual(123);
expect(t1.email).toEqual('alan@email.com');
expect(t1.offnum).toEqual(999);
});