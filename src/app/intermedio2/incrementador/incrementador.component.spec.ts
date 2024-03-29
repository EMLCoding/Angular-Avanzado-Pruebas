import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        // Dispara la deteccion de cambios
        fixture.detectChanges();

        // Busca en cualquier elemento h3 del html
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);

        fixture.detectChanges();

        // Hasta que no se realice la deteccion de cambios no se ejecuta el siguiente código
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;

            expect(elem.value).toBe('55');
        });

    });

    it('Debe de incrementar/decrementar en 5 con un click en el botón', () => {

        const botones = fixture.debugElement.queryAll(By.css('button'));

        // botones[0] reduce el valor en 5
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        // botones[0] aumenta el valor en 5
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll(By.css('button'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');
    })

});
