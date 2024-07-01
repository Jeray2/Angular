const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const BASE_URL = "/peliculas"

const app = express();

app.use(cors());
app.use(express.json());

const peliculas = [
      {
        "id": "1",
        "nombre": "Inception",
        "descripcion": "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartición de sueños es dado la tarea inversa de implantar una idea en la mente de un CEO.",
        "categoria": "Ciencia Ficción",
        "imagen": "https://example.com/inception.jpg",
        "fechaEstreno": "2010-07-16T00:00:00.000Z",
        "duracion": 148,
        "precio": 12.99,
        "rating": 8.8
      },
      {
        "id": "2",
        "nombre": "The Godfather",
        "descripcion": "El envejecido patriarca de una dinastía criminal organizada en Nueva York transfiere el control de su imperio clandestino a su reacio hijo.",
        "categoria": "Crimen",
        "imagen": "https://example.com/godfather.jpg",
        "fechaEstreno": "1972-03-24T00:00:00.000Z",
        "duracion": 175,
        "precio": 10.99,
        "rating": 9.2
      },
      {
        "id": "3",
        "nombre": "The Shawshank Redemption",
        "descripcion": "Dos hombres encarcelados se unen durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.",
        "categoria": "Drama",
        "imagen": "https://example.com/shawshank.jpg",
        "fechaEstreno": "1994-09-23T00:00:00.000Z",
        "duracion": 142,
        "precio": 9.99,
        "rating": 9.3
      },
      {
        "id": 4,
        "nombre": "Shrek",
        "descripcion": "Un Ogre verde risa",
        "fechaEstreno": "2003-03-11T00:00:00.000Z",
        "categoria": "Comedia",
        "imagen": "",
        "duracion": 0,
        "precio": 0,
        "rating": 0
      }
    ];

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a mi api de Peliculas!!</h1>');
});

app.get(BASE_URL, (req, res) => {
    res.json(peliculas);
});

app.post(BASE_URL, (req, res) => {
    const pelicula = req.body;

    if(!pelicula){
        res.status(400).json({
            message: 'La pelicula no puede ser nula'
        });
        return;
    }



    if(!pelicula.nombre || !pelicula.descripcion || !pelicula.categoria || !pelicula.fechaEstreno) {
        res.status(400).json({
            message: 'El elemento es requerido'
        });
        return;
    }

    pelicula.id = peliculas.length + 1;
    peliculas.push(pelicula);
    res.json(peliculas);

});

app.delete(BASE_URL + '/:id', (req, res) => {
    const id = req.params.id;
    const index = peliculas.findIndex(pelicula => pelicula.id == id);
    if(index == -1) {
        res.status(404).json({
            message: 'No se encontro la pelicula'
        });
        return;
    }
    peliculas.splice(index, 1);
    res.json(peliculas);
});

app.push(BASE_URL + '/:id', (req, res) => {
    const id = req.params.id;
    const pelicula = req.body;
    const index = peliculas.findIndex(pelicula => pelicula.id == id);
    if(index == -1) {
        res.status(404).json({
            message: 'No se encontro la pelicula'
        });
        return;
    }
    peliculas[index] = pelicula;
    res.json(peliculas);
});

app.put(BASE_URL + '/:id', (req, res) => {
    const id = req.params.id;
    const pelicula = req.body;
    const index = peliculas.findIndex(pelicula => pelicula.id == id);
    if(index == -1) {
        res.status(404).json({
            message: 'No se encontro la pelicula'
        });
        return;
    }
    peliculas[index] = pelicula;
    res.json(peliculas);
});


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});