import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  toggleMenuButton() {
    let menu = document.getElementById("main-navigation-content");
    let hamburgerIcon = document.getElementById("navigation-icon");
    if (menu != null && hamburgerIcon != null) {
      if (menu.className === "topnav") {
        menu.className += " responsive";
        hamburgerIcon.setAttribute("aria-expanded", "true")
      } else {
        menu.className = "topnav";
        hamburgerIcon.setAttribute("aria-expanded", "false")
      }
    }
  }
}
