let registros = [];

function agregarRegistro() {
    const nombre = document.getElementById("dato_nombre_usuario")
    const pass = document.getElementById("dato_contrasena")
    const edad = document.getElementById("dato_edad_usuario")
    let user_valid = validar_nombre_usuario(nombre);
    let contra_valid = validar_contrasena(pass);
    let edad_valid = validar_edad_usuario(edad);
    if (user_valid && contra_valid) {
        var usu_nuevo = document.getElementById("dato_nombre_usuario").value
        var contra_nuevo = document.getElementById("dato_contrasena").value
        var edad_nuevo = document.getElementById("dato_edad_usuario").value
        var reg_nuevo = { usuario: usu_nuevo, contrasena: contra_nuevo, edad: edad_nuevo };
        registros.push(reg_nuevo);
        console.log(registros)

    }

}

function OrdenarArreglo(arreglo) {

    arreglo.sort((a, b) => {
        if (a.edad > b.edad) {
            return 1;
        }
        if (a.edad < b.edad) {
            return -1;
        }
        if (a.usuario.toLowerCase() > b.usuario.toLowerCase()) {
            return 1;
        }
        if (a.usuario.toLowerCase() < b.usuario.toLowerCase()) {
            return -1;
        }
        return 0;

    });
    return arreglo
}

function validar_nombre_usuario(string) {
    var alfanum = /^[0-9a-zA-Z]+$/;
    let warnings = "";
    let bandera = false;

    if ((string.value.length < 4) || (string.value.length > 9) || (!string.value.match(alfanum))) {
        warnings = 'El nombre de Usuario no es válido';
        bandera = true;
    } else {
        return true;
    }
    if (bandera) {

    }
    return false;
}

function validar_contrasena(string) {

    var alfanum = /^[a-zA-Z\d]+$/;
    let warnings = "";
    let bandera = false;

    if ((string.value.length < 6) && (string.value.length > 16) || (!string.value.match(alfanum))) {
        warnings += 'La contraseña no es válida';
        bandera = true;
    } else {
        return true;
    }
    if (bandera) {

    }
    return false;
}


function validar_edad_usuario(Number) {

    var Number = "/[13-110]/";
    let warnings = "";
    let bandera = false;

    if ((Number.value < 13) && (Number.value > 110)) {
        warnings += 'La edad no es válida';
        bandera = true;
    } else {
        return true;
    }
    if (bandera) {

    }
    return false;
}


module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;