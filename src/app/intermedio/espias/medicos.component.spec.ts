import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of } from 'rxjs';

describe('Medicos Component', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe de cargar los medicos', () => {

        const medicos = ['med1', 'med2', 'med3'];

        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return of(medicos);
        })

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al método agregarMedico', ()=>{

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico=>{
            return of();
        });

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo medico al arreglo de medicos', ()=>{

        const medico = {id: 1, nombre: 'Pepe'};

        spyOn(servicio, 'agregarMedico')
            .and.returnValue( of(medico));        

        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    /* it('Si falla la adición la propiedad debe ser igual al servicio', ()=>{
        
        const miError = 'No se puede agregar';
        
        spyOn(servicio, 'agregarMedico')
        .and.returnValue()        
        
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    }); */

    it('Debe llamar al servidor para borrar el médico', ()=>{

        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1')
        expect(espia).toHaveBeenCalledWith('1');
    });

    it('No debe llamar al servidor para borrar el médico', ()=>{

        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1')
        expect(espia).not.toHaveBeenCalledWith('1');
    });

});