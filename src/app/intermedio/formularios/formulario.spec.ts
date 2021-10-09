import { FormBuilder } from "@angular/forms";
import { formularioRegister } from "./formulario";


describe('Formularios', ()=>{

    let componente: formularioRegister;

    beforeEach(()=>{

        componente = new formularioRegister(new FormBuilder());

    })

    it('Debe de crear un formulario con dos campos', ()=>{

        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });

});