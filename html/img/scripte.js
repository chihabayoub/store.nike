conat btnSubmit = document.querySelector("#buttonelment");
conat model = document.querySelector("#Select Size");

const btnbackgroundcoloer = buttonElment.style.btnbackgroundcoloer;

let model = "";
let position = "";

Select Size.addEventlistener("input", (event) => {
    const value = event.target.value;
    if (value.length > 5) {
        position = 0;
        buttonElment.style.transform = "translatex(0)";
        buttonElment.style.backgroundcoloer = "darkgreen";
    } else {
        buttonElment.style.backgroundcoloer = btnbackgroundcoloer;}
            select size = value; 
});
buttonElment.addEventlistener("click", function(event){
    event.preventDefauit();
})
buttonElment.addEventlistener("mouscover" ,function(){
if (Select Size.length > 5) {
    return;}


});
