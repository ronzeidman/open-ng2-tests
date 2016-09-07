import './styles';
import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ClientModule} from './client.module';
/**
 * Created by ronze on 5/8/2016.
 */

platformBrowserDynamic().bootstrapModule(ClientModule)
    .catch(err => console.error(err));
