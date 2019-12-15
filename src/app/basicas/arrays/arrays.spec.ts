import { obtenerRobots } from './arrays';

describe('Prueba de arrays', () => {
    it('Debe de devolver almenos 3 robots', () => {
        const respuesta = obtenerRobots();

        expect(respuesta.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Megaman y a Doraemon', () => {
        const respuesta = obtenerRobots();

        // Si falla uno de los dos expect entonces falla la prueba
        expect(respuesta).toContain('Megaman');
        expect(respuesta).toContain('Doraemon');
    });
});
