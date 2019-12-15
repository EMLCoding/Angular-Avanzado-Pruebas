import { Jugador } from './clases';
describe('Pruebas de clases', () => {

    let jugador = new Jugador();

    // Ciclos de vida de las pruebas
    // beforeAll() -> se ejecuta antes que cualquier 'it' pero SOLO UNA VEZ
    // beforeEcha() -> se ejecuta una vez antes que cada prueba
    // afterAll() -> se ejecuta una vez despues de terminar todas las pruebas
    // afterEach() -> se ejecuta una vez después de cada una de las pruebas

    beforeAll(() => {
        console.log('beforeAll');
    });
    beforeEach(() => {
        console.log('beforeEach');
        jugador = new Jugador();
    });
    afterAll(() => {
        console.log('afterAll');
    });
    afterEach(() => {
        console.log('afterEach');
    });

    it('Debe de devolver 80 de HP si recibe 20 de daño', () => {
        const respuesta = jugador.recibeDanio(20);

        expect(respuesta).toBe(80);
    });

    it('Debe de devolver 50 de HP si recibe 50 de daño', () => {
        const respuesta = jugador.recibeDanio(50);

        expect(respuesta).toBe(50);
    });
});
