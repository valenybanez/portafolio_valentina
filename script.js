mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("gusta").innerHTML="("+mostrar+")"
}

mostrar = localStorage.getItem("dislike")
if(!mostrar){
    document.getElementById("no me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("no me gusta").innerHTML="("+mostrar+")"
}


const MeGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("gusta").innerHTML="("+mostrar+")"
     
}

const NomeGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("dislike",guardar)
    mostrar = localStorage.getItem("dislike")
    document.getElementById("no me gusta").innerHTML="("+mostrar+")"   
}








mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("_me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("_me gusta").innerHTML="("+mostrar+")"
}

mostrar = localStorage.getItem("dislike")
if(!mostrar){
    document.getElementById("_no me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("_no me gusta").innerHTML="("+mostrar+")"
}


const _MeGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("_me gusta").innerHTML="("+mostrar+")"
     
}

const _NomeGusta=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("dislike",guardar)
    mostrar = localStorage.getItem("dislike")
    document.getElementById("_no me gusta").innerHTML="("+mostrar+")"
     
}









mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("- me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("- me gusta").innerHTML="("+mostrar+")"
}

mostrar = localStorage.getItem("dislike")
if(!mostrar){
    document.getElementById("- no me gusta").innerHTML="("+0+")"
}else{  
    document.getElementById("- no me gusta").innerHTML="("+mostrar+")"
}


const like=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("- me gusta").innerHTML="("+mostrar+")"
     
}

const dislike=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("dislike",guardar)
    mostrar = localStorage.getItem("dislike")
    document.getElementById("- no me gusta").innerHTML="("+mostrar+")"
     
}








mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("encanta").innerHTML="("+0+")"
}else{  
    document.getElementById("encanta").innerHTML="("+mostrar+")"
}

mostrar = localStorage.getItem("dislike")
if(!mostrar){
    document.getElementById("no me encanta").innerHTML="("+0+")"
}else{  
    document.getElementById("no me encanta").innerHTML="("+mostrar+")"
}


const _like=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("like")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("encanta").innerHTML="("+mostrar+")"
     
}

const _dislike=()=>{
    let recuperar,guardar,mostrar
    recuperar = localStorage.getItem("dislike")
    if(recuperar){
        guardar = parseInt(recuperar) + 1
    }
    else{
        guardar = 1
    }

    localStorage.setItem("dislike",guardar)
    mostrar = localStorage.getItem("dislike")
    document.getElementById("no me encanta").innerHTML="("+mostrar+")"
     
}