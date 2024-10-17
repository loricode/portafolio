import express from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app = express();

app.set('port', process.env.PORT || 4000 );

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   res.render('index.html');
});

app.listen(app.get('port'), () => {

   console.log("listening express")

})