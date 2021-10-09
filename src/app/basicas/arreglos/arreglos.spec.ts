import { obtenerRobots } from "./arreglos";

xdescribe('Pruebas de arreglos', () => {
    it ('Debe retornar al menos 3 elementos', ()=> {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it ('Debe verificar si en el arreglo esta Megaman y Terminator', ()=> {
        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Terminator');

    });
});