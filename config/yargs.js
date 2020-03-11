const descripcion = {
    demad: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demad: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente'
}

const completado2 = {
    demad: true,
    alias: 'c',
    default: "",
    desc: 'Marca como completado o pendiente'
}

const argvs = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Listar tareas', {
        completado2
    })
    .help()
    .argv;

module.exports = {
    argvs
}