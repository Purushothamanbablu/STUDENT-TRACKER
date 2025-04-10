

document.getElementById("sub").addEventListener('click', () => {

    let x = document.getElementById("num").value
    let y = document.getElementById("pass").value

    let a = "123";
    let b = "123";


    if(x==a && y==b){
        window.location.href = "tView.html";
    }
    else{
        alert("Unauthorized Person not allowed")
    }

    document.getElementById("num").value="";
    document.getElementById("pass").value="";

})