import { mensaje } from './string';

// Para agrupar pruebas: describe();
// Es una prueba específica: it();


describe('Pruebas de strings', () => {

    it('Debe de regresar un string', () => {
        const respuesta = mensaje('Eduardo');

        // Para comprobar que la prueba es exitosa
        expect(typeof respuesta).toBe('string');
    });

    it('Debe de regresar un saludo con el nombre enviado como parámetro', () => {

        const nombre = 'Pepe';

        const respuesta = mensaje(nombre);

        expect(respuesta).toContain(nombre);
    });
});
