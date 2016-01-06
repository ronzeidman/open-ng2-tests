
// Angular 2
import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {AuthHttp} from 'angular2-jwt';

@Component({
    selector: 'my-app',
    template: '<p>loaded</p>'
})
class AppComponent {}

bootstrap(AppComponent, [AuthHttp]);

