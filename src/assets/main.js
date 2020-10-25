document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar_');
    if(window.pageYOffset > 0)
        navbar.classList.add('sticky'); 
    else 
        navbar.classList.remove('sticky');
    
    });
    function myFunction() {
        document.getElementById("dropdownMenu").classList.toggle("show");
    }
})

$(function(){
    alert("huhih")
})
