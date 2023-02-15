function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id entrenador </th> "+
                        "<th> Nombre </th> "+
                        "<th> Fecha Nacimiento </th> "+
                        "<th> Pokemon </th> "+
                        "<th> Tipo </th> "+
                        "<th> Region </th> "+
                        "<th> MBO </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/entrenador/",
        
       

        
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].Id_Coach + "</td>" +
                                "<td>" + data[i].Name+ "</td>"+
                                "<td>" + data[i].Birthdate+ "</td>"+
                                "<td>" + data[i].Team_Pokemon+ "</td>"+
                                "<td>" + data[i].Type_Pokemon+ "</td>"+
                                "<td>" + data[i].Region+ "</td>"+
                                "<td>" + data[i].MBO+ "</td>"+
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
        Name : $("#nombre").val(),
        Birthdate : $("#fecha").val(),
        Team_Pokemon : $("#Pokemon").val(),
        Type_Pokemon : $("#tipo").val(),
        Type_Pokemon : $("#Region").val(),
        Type_Pokemon : $("#MBO").val(),
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/entrenador",
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

      $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/TP",
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

      $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/Region",
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
      $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/MBO",
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

/*function cargarH(){
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/TP",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].Type_Pokemon + "</td>" +
                                
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}

function insertarDatosH(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        Name : $("#nombre").val(),
        Birthdate : $("#fecha").val(),
        Team_Pokemon : $("#Pokemon").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/TP",
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
*/





























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




