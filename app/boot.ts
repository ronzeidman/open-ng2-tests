
// Angular 2
import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {TYPEAHEAD_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'my-form',
    template: `
    <form (submit)="logSubmit()">
        <input [(ngModel)]="testModel"
               [typeahead]="['aaa','bbb','ccc']"
               type="text" placeholder="test"
               class="form-control"
               autocomplete="off"
         >
        <button type="submit" >Submit</button>
    </form>
    `,
    directives: [TYPEAHEAD_DIRECTIVES]
})
class FormComponent {
    testModel = '';

    logSubmit() {
        console.log("Submitted!")
    }
}

@Component({
    selector: 'my-app',
    template: '<my-form></my-form>',
    directives: [FormComponent]
})
class AppComponent {}

bootstrap(AppComponent);
