// Función para "Me gusta"
function like() {
    let likes = localStorage.getItem("likes") || 0;
    likes = parseInt(likes) + 1;
    localStorage.setItem("likes", likes);
    document.getElementById("- me gusta").textContent = `(${likes})`;
  }
  
  // Función para "No me gusta"
  function dislike() {
    let dislikes = localStorage.getItem("dislikes") || 0;
    dislikes = parseInt(dislikes) + 1;
    localStorage.setItem("dislikes", dislikes);
    document.getElementById("- no me gusta").textContent = `(${dislikes})`;
  }
  
  // Función para "Me gusta" (segunda sección)
  function MeGusta() {
    let likes = localStorage.getItem("likes2") || 0;
    likes = parseInt(likes) + 1;
    localStorage.setItem("likes2", likes);
    document.getElementById("gusta").textContent = `(${likes})`;
  }
  
  // Función para "No me gusta" (segunda sección)
  function NomeGusta() {
    let dislikes = localStorage.getItem("dislikes2") || 0;
    dislikes = parseInt(dislikes) + 1;
    localStorage.setItem("dislikes2", dislikes);
    document.getElementById("no me gusta").textContent = `(${dislikes})`;
  }
  
  // Función para "Me gusta" (tercera sección)
  function _MeGusta() {
    let likes = localStorage.getItem("likes3") || 0;
    likes = parseInt(likes) + 1;
    localStorage.setItem("likes3", likes);
    document.getElementById("_me gusta").textContent = `(${likes})`;
  }
  
  // Función para "No me gusta" (tercera sección)
  function _NomeGusta() {
    let dislikes = localStorage.getItem("dislikes3") || 0;
    dislikes = parseInt(dislikes) + 1;
    localStorage.setItem("dislikes3", dislikes);
    document.getElementById("_no me gusta").textContent = `(${dislikes})`;
  }

    // Función para "encanta" (cuarta sección)
    function _like() {
        let likes = localStorage.getItem("likes4") || 0;
        likes = parseInt(likes) + 1;
        localStorage.setItem("likes4", likes);
        document.getElementById("encanta").textContent = `(${likes})`;
      }
      
      // Función para "no me encanta" (cuarta sección)
      function _dislike() {
        let dislikes = localStorage.getItem("dislikes4") || 0;
        dislikes = parseInt(dislikes) + 1;
        localStorage.setItem("dislikes4", dislikes);
        document.getElementById("no me encanta").textContent = `(${dislikes})`;
      }