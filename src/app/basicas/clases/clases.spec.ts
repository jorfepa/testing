import { Jugador } from './clases';


xdescribe('Prueba de clase', () => {

    const jugador = new Jugador();

    it('Debe retornar 80 si recibe 20', () => {
        const res = jugador.recibeDanio(20);
        expect(res).toBe(80);
    });

    it('Debe retornar 50 si recibe 50', () => {
        const res = jugador.recibeDanio(30);
        expect(res).toBe(50);
    });

    it('Debe retornar 0 si recibe mas de 100', () => {
        const res = jugador.recibeDanio(120);
        expect(res).toBe(0);
    });
})