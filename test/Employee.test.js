const Employee = require("../lib/Employee");

test("Can create a new Employee?",() => {
const t1 = new Employee('Alan', 123, 'alan@email.com')
expect(t1.name).toBe('Alan');
expect(t1.id).toBe(123);
expect(t1.email).toBe('alan@email.com');
});
