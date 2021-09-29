var cadena="";
function selectImpact(val){
    cadena="";
    if(val == 'Todos'){
        cadena += '<option select >Todos</option>';
        cadena += '<option value="1">Informativo</option>';
        cadena += '<option value="2">Positivo</option>';
        cadena += '<option value="3">Negativo</option>';
    }
    else if (val == 'Informativo'){
        cadena += '<option select value="1">Informativo</option>';
        cadena += '<option value="2">Positivo</option>';
        cadena += '<option value="3">Negativo</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Positivo'){
        cadena += '<option select value="2">Positivo</option>';
        cadena += '<option value="3">Negativo</option>';
        cadena += '<option value="1">Informativo</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Negativo'){
        cadena += '<option select value="3">Negativo</option>';
        cadena += '<option value="1">Informativo</option>';
        cadena += '<option value="2">Positivo</option>';
        cadena += '<option >Todos</option>';
    }
    $("#impact").empty();
    $("#impact").append(cadena);
}

function selectScope(val){
    cadena="";
    if(val == 'Todos'){
        cadena += '<option select >Todos</option>';
        cadena += '<option value="1">Local</option>';
        cadena += '<option value="2">Regional</option>';
        cadena += '<option value="3">Nacional</option>';
    }
    else if (val == 'Local'){
        cadena += '<option select value="1">Local</option>';
        cadena += '<option value="2">Regional</option>';
        cadena += '<option value="3">Nacional</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Regional'){
        cadena += '<option select value="2">Regional</option>';
        cadena += '<option value="3">Nacional</option>';
        cadena += '<option value="1">Local</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Nacional'){
        cadena += '<option select value="3">Nacional</option>';
        cadena += '<option value="1">Local</option>';
        cadena += '<option value="2">Regional</option>';
        cadena += '<option >Todos</option>';
    }
    $("#scope").empty();
    $("#scope").append(cadena);
}

function selectMedia(val){
    cadena="";
    if(val == 'Todos'){
        cadena += '<option select>Todos</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
    }
    else if (val == 'Medios radiales'){
        cadena += '<option select value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Medios escritos'){
        cadena += '<option select value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'TV'){
        cadena += '<option select value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option >Todos</option>';
    }
    else if (val == 'Redes sociales'){
        cadena += '<option select value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option >Todos</option>';
    }
    $("#media_type").empty();
    $("#media_type").append(cadena);
}

function selectImpact2(val){
    cadena="";
    if (val == 'Informativo'){
        cadena += '<option select value="1">Informativo</option>';
        cadena += '<option value="2">Positivo</option>';
        cadena += '<option value="3">Negativo</option>';
    }
    else if (val == 'Positivo'){
        cadena += '<option select value="2">Positivo</option>';
        cadena += '<option value="3">Negativo</option>';
        cadena += '<option value="1">Informativo</option>';
    }
    else if (val == 'Negativo'){
        cadena += '<option select value="3">Negativo</option>';
        cadena += '<option value="1">Informativo</option>';
        cadena += '<option value="2">Positivo</option>';
    }
    $("#impact2").empty();
    $("#impact2").append(cadena);
}

function selectScope2(val){
    cadena="";
    if (val == 'Local'){
        cadena += '<option select value="1">Local</option>';
        cadena += '<option value="2">Regional</option>';
        cadena += '<option value="3">Nacional</option>';
    }
    else if (val == 'Regional'){
        cadena += '<option select value="2">Regional</option>';
        cadena += '<option value="3">Nacional</option>';
        cadena += '<option value="1">Local</option>';
    }
    else if (val == 'Nacional'){
        cadena += '<option select value="3">Nacional</option>';
        cadena += '<option value="1">Local</option>';
        cadena += '<option value="2">Regional</option>';
    }
    $("#scope2").empty();
    $("#scope2").append(cadena);
}

function selectMedia2(val){
    cadena="";
    if (val == 'Medios radiales'){
        cadena += '<option select value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
    }
    else if (val == 'Medios escritos'){
        cadena += '<option select value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
    }
    else if (val == 'TV'){
        cadena += '<option select value="3">TV</option>';
        cadena += '<option value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
    }
    else if (val == 'Redes sociales'){
        cadena += '<option select value="4">Redes sociales</option>';
        cadena += '<option value="1">Medios radiales</option>';
        cadena += '<option value="2">Medios escritos</option>';
        cadena += '<option value="3">TV</option>';
    }
    $("#media_type2").empty();
    $("#media_type2").append(cadena);
}