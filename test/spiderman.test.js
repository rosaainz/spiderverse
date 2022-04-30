const Spiderman = require("../app/Spiderman");

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        
        //Codigo que queremos tal cual
        //Queremos instanciar un objeto Spiderman con as sig info:
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos que el codigo funcione
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    });
  })