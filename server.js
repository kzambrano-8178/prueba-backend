import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import router from "./rutas/index.ruta";

const app = express();

// let sslPath = '/etc/letsencrypt/live/api.elize.com.ec/';
// const credentials = {
// 	key: fs.readFileSync(sslPath + 'privkey.pem'),
// 	cert: fs.readFileSync(sslPath + 'fullchain.pem')
// };

const http = require("http").Server(app);
//const https = require('https').Server(credentials,app);

app.use(express.static(__dirname + '/public'));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(json());

//app.use(cors({origin: 'http://localhost:8100'}));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" === req.method) res.status(200).end();
  else next();
});

// Midleware de rutas

app.use("/", router);

async function main() {
  await http.listen(3000, () => {
    console.log("Servidor backend corriendo en el puerto 3000.");
  });
  // await https.listen(443, () =>{
  //     console.log('Servidor backend Elize corriendo en el puerto 443.')
  // });
}
main();

export default app;
