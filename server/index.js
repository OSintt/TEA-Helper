import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import five from 'johnny-five';

const board = new five.Board();
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

//settings
app.set('port', process.env.PORT || 3001);

//routes
app.use('/v1', require('./routes'));

//start
board.on('ready', () => {
    app.listen(app.get('port'), () => console.log('arduino online y servidor corriendo en el puerto', app.get('port')));
});
