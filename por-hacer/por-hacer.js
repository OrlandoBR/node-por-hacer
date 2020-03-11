const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}


const getListado = (completado) => {

    cargarDB();
    console.log("Listando tareas con... " + completado);
    if (completado != "")
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.completado == completado);

    return listadoPorHacer;

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    }

    console.log(descripcion);

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const actualizar = (descripcion, completadp = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completadp;
        guardarDB();
        return true;
    } else
        return false;

}

const borrar = (descripcion) => {

    cargarDB();

    console.log('Buscando.. '.yellow + descripcion);

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    //Otra manera de eliminar ***
    //listadoPorHacer = listadoPorHacer.filter(person => person.descripcion !== descripcion);
    //guardarDB();
    //***************

    console.log('Index.. '.yellow + index);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}