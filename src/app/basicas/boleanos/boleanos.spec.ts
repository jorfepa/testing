import { usuarioIngresado } from "./boleanos";

describe('Prueba de boleanos', ()=>{
    it('Debe de retornar true', ()=>{
        const res = usuarioIngresado();
        expect(res).toBeTruthy();
        // expect(res).not.toBeFalsy();
    });
});