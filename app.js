/* 
 ***************************************************
 *             COMPUTO EN LA NUBE                  *
 *                   ITESO                         *
 *                                                 * 
 *    Actividad 1: Diseño de un WebService         *
 *    Codigo Base: Alvaro Parres (parres@iteso.mx) * 
 *                                                 * 
 *    Alumno: <COMPLETAR SU NOMBRE>                *
 *    Exp: <Numero_de_Expediente>                  *
 *                                                 *
 ***************************************************
 *                                                 *
 * Instrucciones: Complete el codigo basado en     * 
 * las indicaciones descritas en el documento      *
 *                                                 *
 ***************************************************
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var calc = require('./routes/calc');

var app = express();

app.use(logger('dev'));app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Indicamos que la ruta / sera procesada por el
//script apuntado por calc (routes/calc.js)
app.use('/', calc);

/*
 * ******************************************************
 * Continue el ejercicio en el archivo routes/calc.js  *
 *  * **************************************************
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
