$( document ).ready(function() {
  $( "#curso" ).change(function() {
    var curso = document.getElementById("curso").value;
    if (curso=='1ro' || curso=='2do' ||curso=='3ro') {
      $.ajax({
    type: 'GET',
    async:false,
    url: 'http://colegio.paparelli.com.ar/cursos',
    dataType : 'json',
    success: function(data){
      var division = $('#division');
      item = '<select id="divisiones" class="input-lg"><option>Seleccionar</option>'

      $.each(data.results, function(i, field){
        if (curso=="1ro" && field.id>=3 && field.id<=6) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
        else if (curso=="2do" && field.id>=7 && field.id<=10) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
        else if (curso=="3ro" && field.id>=11 && field.id<=12) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
        
      });
      item += '</select>'
     division.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
if(curso=='3ro'){
 $.ajax({
    type: 'GET',
    async:false,
    url: 'http://colegio.paparelli.com.ar/cursos/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if (field.id>=13 && field.id<=14) {
           $('#divisiones').append($('<option></option>', { 
              value : field.nombre+' ('+ field.anio_de_curso + ')',
              text : field.nombre+' ('+ field.anio_de_curso + ')'
            }));  
        }
        else{ console.log('error')}
        
        
      });    
     },
     error: function (response, status, error) {
       console.log(error);
     }
});
}
} if (curso=='4to' || curso=='5to') {
        $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar/cursos/?page=2',
    dataType : 'json',
    success: function(data){
      var division = $('#division');
      
      item = '<select id="divisiones" class="input-lg"><option>Seleccionar</option>'
      
      $.each(data.results, function(i, field){
        if (curso=="4to" && field.id>=15 && field.id<=18) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
        else if (curso=="5to" && field.id>=19 && field.id<=22) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }    
      });
      item += '</select>'
     division.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
};
if (curso=='6to' || curso=='7mo')
{
        $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar/cursos/?page=3',
    dataType : 'json',
    success: function(data){
      var division = $('#division');
      item = '<select id="divisiones" class="input-lg"><option>Seleccionar</option>'

      $.each(data.results, function(i, field){
         if (curso=="6to" && field.id>=23 && field.id<=25) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
        else if (curso=="7mo" && field.id>=27 && field.id<=29) {
          item += '<option id="'+field.id+'">'+field.nombre+
            ' ('+ field.anio_de_curso + ')' +
            '</option>';
        }
      });
      item += '</select>'
     division.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}
  })

  $( "#aceptar" ).click(function() {
    var divisiones = document.getElementById("divisiones").selectedIndex;
    var curso = document.getElementById("curso").value; 
    var html = 'cursos/' + curso + '-' + divisiones + '.html'; 
    $( "form" ).attr('action', html)
  })
})


