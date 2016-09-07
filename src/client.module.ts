import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClientComponent} from './client.component';
import {ToastModule} from 'ng2-toastr';
/**
 * Created by ronze on 8/14/2016.
 */


@NgModule({
    imports: [
        BrowserModule,
        ToastModule
    ],
    providers: [
    ],
    declarations: [
        ClientComponent
    ],
    bootstrap: [
        ClientComponent
    ]
})
export class ClientModule {
}
