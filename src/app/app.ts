import { Component, Optional} from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
// import { trigger, transition, style, animate, query, group} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',

})

export class App {

  closeMenu(){
    const navCollapse = document.querySelector('.navbar-collapse');
    if(navCollapse && navCollapse.classList.contains('show')){
      navCollapse.classList.remove('show');
    }
  }
}
