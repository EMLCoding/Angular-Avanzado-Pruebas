// Necesario para las pruebas entre elementos de un componente
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;

    });

    it('Debe de crear el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de devolver el nombre del médico', () => {
        const nombre = 'Edu';
        const res = component.saludarMedico(nombre);

        expect(res).toContain(nombre);
    })

});