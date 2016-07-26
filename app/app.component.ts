import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [] property binding - component to dom
    // () event binding - dom to component
    // {} rendering a value

    title = 'Customer App';
    name = 'Adam';
    adamsColor = 'red';

    changeColor() {
        this.adamsColor = this.adamsColor === 'blue' ? 'red' : 'blue';
    }
 }
