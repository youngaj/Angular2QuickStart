import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'         
})

export class AppComponent { 
    title = 'Customer App';
    name = "Andre";
    nameColor = 'red';

    changeColor = function(){
        if(this.nameColor === 'red')
            this.nameColor = 'blue'
        else
            this.nameColor = 'red'
    };
}
