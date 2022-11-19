const Intern = require("../lib/Employee");
// creating and running a new test that created an object and making it equal to the correct supposed values
test("Can create a new Employee?",() => {
const t1 = new Intern('Alan', 123, 'alan@email.com');
expect(t1.name).toEqual('Alan');
expect(t1.email).toEqual('alan@email.com');
expect(t1.id).toEqual(123);
});