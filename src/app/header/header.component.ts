import { Component, OnInit } from '@angular/core';
declare const myFunction: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar_');
    if(window.pageYOffset > 0)
        navbar.classList.add('sticky'); 
    else 
        navbar.classList.remove('sticky');
    
    });
  
})
    function myTest(){
        alert("Welcome to custome js");
    }
  
      function myFunction() {
        document.getElementById("dropdownMenu").classList.toggle("show");
    }


  }

}
