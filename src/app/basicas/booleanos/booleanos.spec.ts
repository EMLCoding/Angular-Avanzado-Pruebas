import { usuarioLogueado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('El login debe devolver true', () => {
        const respuesta = usuarioLogueado();

        expect(respuesta).toBeTruthy(); // Espera que devuelva un true
    });
});
