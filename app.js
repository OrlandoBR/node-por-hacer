//const argv = require('yargs').argv;

const argv = require('./config/yargs.js').argvs;

const porHacer = require('./por-hacer/por-hacer');

const colores = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado2);
        console.log("- - - - - - >>");

        for (let tarea of listado) {
            //console.log('===== Por Hacer ====='.green);

            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log("");
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado)
            console.log('Dato eliminado'.green);
        else
            console.log('No se encontro el elemento'.red);

        break;
    default:
        console.log('Comando no reconocido');
}