import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'front';

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      (function($) {
        "use strict";
    
        // Add active state to sidebar nav links
        var path = window.location.href.toString(); // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
          $(this).addClass("active");
        });
    
        // Toggle the side navigation
        $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
        });
      })(jQuery);
    }
  }
}
