const btn =  document.querySelector("#btn");
btn.addEventListener("click" , changeColor);

function changeColor(){
    const currClass = btn.className;
    console.log(currClass);
    if(currClass==="red"){
        btn.classList.add('black');
        btn.classList.remove('red'); 
    }
    else{
    btn.classList.remove('black');
    btn.classList.add('red');
}
}