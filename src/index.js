const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const app = express();
const taskRoutes = require('./routes/tasks.routes');
/*
var fs = require('fs');
var csv = require('fast-csv');
const pool = require('./db');
const parse = require('csv-parse');

pool.connect(function(err){
    if(err)
    {
        console.log(err);
    }
});

let counter = 0; 

// let header = [];
// let data = [];

let csvStream = csv.parseFile('src/csv/AsistenciaEmp.csv', { headers: true })
    .on("data", function(record){
        csvStream.pause();

        if(counter < 436)
        {
            let hora_entrada = record.cas_hora_entrada;
            let hora_salida = record.cas_hora_salida;
            let fecha = record.cas_fecha;
            let persona_empleado = record.fk_persona_empleado;


            pool.query("INSERT INTO control_asistencia (cas_hora_entrada, cas_hora_salida, cas_fecha, fk_persona_empleado) VALUES("+hora_entrada+","+hora_salida+", "+fecha+", $1)", [persona_empleado],/* function(err){
                if(err)
                {
                    console.log(err);
                }
            });
            ++counter;
        }

        csvStream.resume();

    }).on("end", function(){
        console.log("Datos insertados con exito!");
    })/*.on("error", function(err){
        console.log(err);
    });*/

app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

app.use(taskRoutes);

app.use( (err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(3000)
console.log('Server on port 3000')