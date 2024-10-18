import express from 'express';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
//For env File 
dotenv.config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('port', process.env.PORT || 4000 );

app.set("view options", {layout: false});
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.render('index.html');
});

app.listen(app.get('port'), () => {

   console.log("listening express")

})