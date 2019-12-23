import { Jugador2 } from './jugador2';


describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando recibe daño', () => {

        let nuevoHP = 0;

        // Las pruebas esperan a que el subscribe devuelva datos para seguir con las siguientes lineas de código
        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp;
        });

        jugador.recibeDanio(1000);

        expect(nuevoHP).toBe(0);
    })
})