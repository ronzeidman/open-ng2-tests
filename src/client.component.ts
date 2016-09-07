import {Component, ViewEncapsulation} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/src/toast-manager';
/**
 * Created by ronze on 3/30/2016.
 */

@Component({
    selector: 'my-app',
    template: '<h1>Working</h1>'
})
export class ClientComponent {
    constructor(private toast: ToastsManager) {

    }

    ngOnInit() {
        setTimeout(() => this.toast.success('Success'), 1000);
    }
}
