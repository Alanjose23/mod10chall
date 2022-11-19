const Engineer = require("../lib/Engineer");

test("Can create a new Engineer?",() => {
const t1 = new Engineer('Alan','alan@email.com',123, 'Alanjose23')
expect(t1.name).toBe('Alan');
expect(t1.id).toBe(123);
expect(t1.email).toBe('alan@email.com');
expect(t1.git).toBe('Alanjose23')
});