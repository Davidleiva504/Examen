/* entrenadores */
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
        url: "https://desfrlopez.me/dleiva/api/entrenadores/",
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
        nombre : $("#nombre").val(),
        edad : $("#edad").val(),
        genero : $("#genero").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/entrenadores/" +id,
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
        url: "https://desfrlopez.me/dleiva/api/entrenadores/"+id,
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

/* Regiones */
function cargarDatosR(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Region </th> "+
                        "<th> Region </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/regiones/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatosR(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
    
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/regiones/",
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

      cargarDatosR();

}

function actualizarDatosR(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/regiones/" +id,
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

      cargarDatosR();

}

function borrarDatosR(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/regiones/"+id,
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

      cargarDatosR();

}


/* Medallas */
function cargarDatosM(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id medalla </th> "+
                        "<th> Id entrenador </th> "+
                        "<th> Id region </th> "+
                        "<th> Nombre medalla </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/medallas/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].entrenador_id+ "</td>"+
                                "<td>" + data[i].region_id+ "</td>"+
                                "<td>" + data[i].nombre+ "</td>"+
                               
                                
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatosM(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        entrenador_id : $("#entrenador").val(),
        region_id : $("#region").val(),
        nombre : $("#nombre").val(),
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/medallas/",
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

      cargarDatosM();

}

function actualizarDatosM(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        entrenador_id : $("#entrenador").val(),
        region_id : $("#region").val(),
        nombre : $("#nombre").val(),
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/medallas/" +id,
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

      cargarDatosM();

}

function borrarDatosM(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/medallas/"+id,
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

      cargarDatosM();

}


/* Pokemons */
function cargarDatosP(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id </th> "+
                        "<th> Nombre pokemon</th> "+
                        "<th> tipo1</th> "+
                        "<th> tipo2</th> "+
                        "<th> nivel </th> "+
                        "<th> Hp</th> "+
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/pokemons/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "<td>" + data[i].tipo1+ "</td>"+
                                "<td>" + data[i].tipo2+ "</td>"+
                                "<td>" + data[i].nivel+ "</td>"+
                                "<td>" + data[i].hp+ "</td>"+
                                
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatosP(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
       tipo1 : $("#tipo1").val(),
        tipo2 : $("#tipo2").val(),
        nivel : $("#nivel").val(),
        hp : $("#Hp").val(),
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/pokemons/",
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

      cargarDatosP();

}

function actualizarDatosP(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
       tipo1 : $("#tipo1").val(),
        tipo2 : $("#tipo2").val(),
        nivel : $("#nivel").val(),
        hp : $("#Hp").val(),
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/pokemons/" +id,
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

      cargarDatosP();

}

function borrarDatosP(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/pokemons/"+id,
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

      cargarDatosP();

}


/* Habilidades */
function cargarDatosH(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id  </th> "+
                        "<th> Habilidad </th> "+   
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/habilidades/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatosH(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
     
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/habilidades/",
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

      cargarDatosH();

}

function actualizarDatosH(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre : $("#nombre").val(),
  
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/habilidades/" +id,
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

      cargarDatosH();

}

function borrarDatosH(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/habilidades/"+id,
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

      cargarDatosH();

}

/* Habilidades Pokemon */
function cargarDatosHP(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id  </th> "+
                        "<th> Id Pokemon </th> "+
                        "<th> Id Habilidad </th> "+
                        
                       
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/dleiva/api/pokemon_habilidades/",
 
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id + "</td>" +
                                "<td>" + data[i].pokemon_id+ "</td>"+
                                "<td>" + data[i].habilidad_id+ "</td>"+
                               
                                
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

            
  
        
      };
      

function insertarDatosHP(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        pokemon_id : $("#Pokemon").val(),
        habilidad_id: $("#Habilidad").val(),
       
       
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/dleiva/api/pokemon_habilidades/",
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

      cargarDatosPH();

}

function actualizarDatosHP(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        pokemon_id : $("#Pokemon").val(),
        habilidad_id: $("#Habilidad").val(),
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/dleiva/api/pokemon_habilidades/" +id,
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

      cargarDatosHP();

}

function borrarDatosHP(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/dleiva/api/pokemon_habilidades/"+id,
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

      cargarDatosHP();

}

















