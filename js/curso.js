$( document ).ready(function() {
  $( "#curso" ).change(function() {
    var curso = document.getElementById("curso").value;
    $( "#divisiones" ).prop('disabled',false);
    if (curso=="6to" || curso=="7mo") {
      $("#d4").prop('disabled',true);
    };   
  })
  $( "#divisiones" ).change(function() {
    $( "#aceptar" ).prop('disabled',false);
  })
  $( "#aceptar" ).click(function() {
    var divisiones = document.getElementById("divisiones").value;
    var curso = document.getElementById("curso").value;
    var html = 'cursos/'+curso+'-'+divisiones+'.html';
    $( "#form" ).attr('action', html);
  })
})

