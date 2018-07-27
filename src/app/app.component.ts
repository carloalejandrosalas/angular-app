import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // swal({
    //   position: 'bottom-end',
    //   type: 'success',
    //   title: 'Welcome to Comic App',
    //   showConfirmButton: false,
    //   timer: 1000
    // });
  }

}
