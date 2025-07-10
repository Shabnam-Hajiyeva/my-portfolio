document.addEventListener("DOMContentLoaded", function(){
const buttons=document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
button.addEventListener("click", () =>{
    const details=button.nextElementSibling;

    details.classList.toggle("hidden");

if(details.classList.contains("hidden")){
    button.textContent="Show Details";

}else{
    button.textContent="Hide Details";
}

});
});

});


