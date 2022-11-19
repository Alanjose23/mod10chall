const Manager = require("../lib/Manager");

test("Can create a new Employee?",() => {
const t1 = new Manager('Alan', 'alan@email.com',123, 999)
expect(t1.name).toBe('Alan');
expect(t1.id).toBe(123);
expect(t1.email).toBe('alan@email.com');
expect(t1.offnum).toBe(999);
});