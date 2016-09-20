$( document ).ready(function() {
var curso = $('#lista');
alert(curso);
  if (curso==11 || curso==12)
  {
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        item += '<a href="materias/'+field.id+'.html" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
      });
     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}
else{console.log('error');}

})