$( document ).ready(function() {
  var curso = document.getElementById('lista').innerHTML;
  var c = curso.substring(11);
  var c1 = c.replace(/°/g, '');

  if (c=='1°1°' || c=='1°2°' || c=='1°3°' || c=='1°4°')
  {
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
      });
     
     $.ajax({
      type: 'GET',
      url: 'http://colegio.paparelli.com.ar//materias/?page=6',
      dataType : 'json',
      success: function(data){
        $.each(data.results, function(i, field){
         if(field.id==57){
            materias.append('<a href="#" class="list-group-item">'+
            field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
          }
        });
      },
     error: function (response, status, error) {
       console.log(error);
      }
    });
     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}


if (c=='2°1°' || c=='2°2°' || c=='2°3°' || c=='2°4°' || c=='3°1°' 
          || c=='3°2°' || c=='3°3°' || c=='3°4°') 
  {  
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        if(field.id!=4 && field.id!=7){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
        }
      });
     
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=6',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==57){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=14 && field.id<=17){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}

if (c=='4°1°' || c=='4°2°' || c=='4°3°' || c=='4°4°') 
  {  
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        if(field.id==5 || field.id==6 || field.id==10){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
        }
      });
     
     
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id!=15 && field.id!=17){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=3',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=24 && field.id<=26){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}



if (c=='5°1°' || c=='5°2°' || c=='5°3°' || c=='5°4°') 
  {  
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        if(field.id==5 || field.id==10){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
        }
      });
     
     if(c!='5°2°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==14 || field.id==16 || field.id==21 || field.id==23){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=3',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=24 && field.id<=30){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }
   if(c=='5°2°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==14 || field.id==16 || field.id==21){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=3',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id!=25 && field.id!=26 && field.id!=29){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=4',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==34 || field.id==35){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }
     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}

if (c=='6°1°' || c=='6°2°' || c=='6°3°') 
  {  
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        if(field.id==5 || field.id==10){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
        }
      });
     
     if(c!='6°2°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==21 || field.id==23){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=3',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=24 && field.id<=26 || field.id==30){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=4',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=36 && field.id<=41){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }
   if(c=='6°2°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=2',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==21){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=3',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==24 || field.id==30){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=4',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=38){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=5',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=44 && field.id<=46){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }

     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}





if (c=='7°1°' || c=='7°2°' || c=='7°3°') 
  {  
  $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar/materias/?page=3',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        if(field.id==32){
        item += '<a href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ')' +
          '</a>';
        }
      });
     
     if(c!='7°3°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=4',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==34){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=5',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=47 && field.id<=52){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }
   if(c=='7°3°'){
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=5',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id==49 || field.id>=51){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
     $.ajax({
    type: 'GET',
    url: 'http://colegio.paparelli.com.ar//materias/?page=6',
    dataType : 'json',
    success: function(data){
      $.each(data.results, function(i, field){
        if(field.id>=54 && field.id<=56){
        materias.append('<a href="#" class="list-group-item">'+
          field.nombre+' ('+ field.anio_cursada + ')'+'</a>');
      }
      });
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
   }

     materias.html(item);
     },
     error: function (response, status, error) {
       console.log(error);
     }
 });
}

})