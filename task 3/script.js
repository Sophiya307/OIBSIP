let temperature=()=>{
    let select=document.querySelector("#unit");
    let display=document.querySelector(".value");
    var a = document.querySelector(".container-d").value;
    if(select.value=="Celsius"){
        console.log(a,"C To F",select.value)
        let F= a * (9/5) + 32;
        display.innerHTML=F.toFixed(4)+" F"
    }
    else{
        console.log(a,"F to C",select.value)
        let C= (a-32)*(5/9)
        display.innerHTML=C.toFixed(4)+" ºC"
    }
}