const Engineer = require("../lib/Engineer");
// creating and running a new test that created an object and making it equal to the correct supposed values
test("Can create a new Engineer?",() => {
const t1 = new Engineer('Alan','alan@email.com',123, 'Alanjose23')
expect(t1.name).toEqual('Alan');
expect(t1.id).toEqual(123);
expect(t1.email).toEqual('alan@email.com');
expect(t1.git).toEqual('Alanjose23')
});