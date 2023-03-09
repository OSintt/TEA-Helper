import five from 'johnny-five';

const toggleLed = (req, res) => {
    let { id, toggle } = req.body;
    if (!id || !toggle) return res.status(400).json({status: 400, message: 'Hacen falta parámetros'});
    if (isNaN(id)) return res.status(400).json({status: 400, message: 'Hay un error en el parámetro ID'});
    id = Number(id);
    if (id > 3 || id < 1) return res.status(400).json({status: 400, message: 'Ese led no existe'});
    if (toggle !== 'on') {
        if (toggle !== 'off') return res.status(400).json({status: 400, message: 'Hay un error en el parámetro TOGGLE'});
    }
    let led;
    switch(id) {
        case '1':
            led = new five.Led(13);
            break;
        case '2':
            led = new five.Led(12);
            break;
        case '3': 
            led = new five.Led(11);
            break;
    }
    toggle === 'on' ? led.on() : led.off();
    return res.status(200).json({message: `Se ha ${toggle === 'on' ? 'encendido' : 'apagado'} el led ${id}`, toggle, id});
}

export {
    toggleLed
};