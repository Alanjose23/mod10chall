const Intern = require("../lib/Employee");

test("Can create a new Employee?",() => {
const t1 = new Intern('Alan', 123, 'alan@email.com');
expect(t1.name).toBe('Alan');
expect(t1.email).toBe('alan@email.com');
expect(t1.id).toBe(123);
});