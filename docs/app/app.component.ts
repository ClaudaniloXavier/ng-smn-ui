import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<ui-input-container><input type="text" ([ngModel])="teste"><label class="teste">teste</label></ui-input-container>'
})
export class AppComponent {
}
