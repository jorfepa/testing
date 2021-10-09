import { Component, OnInit } from "@angular/core";
import { MedicosService } from "./medicos.service";

@Component({
    selector: 'app-medicos',
    template: `
    <p>
        medicos Works!
    </p>
    `,
    styles: []
})

export class MedicosComponent implements OnInit {

    public medicos: any[] = [];
    public mensajeError: string;

    constructor(public _medicoService: MedicosService) { }

    ngOnInit() {
        this._medicoService.getMedicos()
            .subscribe(medicos => this.medicos = medicos);
    }

    agregarMedico() {
        const medico = { nombre: 'Medico Juan Perez' };

        this._medicoService.agregarMedico(medico)
            .subscribe(
                medicoDB => this.medicos.push(medicoDB),
                err => this.mensajeError = err
            );
    }

    borrarMedico(id: string) {
        const confirmar = confirm('Esta seguro que desea borrar');

        if (confirmar) {
            this._medicoService.borrarMedico(id);
        }
    }
}