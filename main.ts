import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {PersonasListComponent} from "./components/personas-list.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
//nuevos imports

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);