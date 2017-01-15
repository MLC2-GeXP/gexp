import { Component } from '@angular/core';


@Component({
    selector: 'gexp-app',
    template: `
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a [routerLink]="['/welcome']" class="navbar-brand">
                    <img src="./app/assets/images/logo.png"
                        class="img-responsive"
                        style="max-height:30px;display: inline-block;padding-right: 15px;"/>
                    {{ pageTitle }}
                </a>
                <ul class="nav navbar-nav">
                    <li class="active"><a [routerLink]="['/explorer']">Data Explorer</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'GDI Smart Explorer'
 }
