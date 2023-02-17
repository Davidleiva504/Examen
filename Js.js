function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id entrenador </th> "+
                        "<th> Nombre </th> "+
                        "<th> edad</th> "+
                        "<th> Genero </th> "+
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/entrenadores/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "<td>" + data[i].edad+ "</td>"+
                                "<td>" + data[i].genero+ "</td>"+
                                
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
        edad : $("#edad").val(),
        genero : $("#genero").val(),
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/entrenadores",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}































function actualizarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        Name : $("#nombre").val(),
        Birthdate : $("#fecha").val(),
        Team_Pokemon : $("#Pokemon").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/entrenador/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

function borrarDatos(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/entrenador/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}




