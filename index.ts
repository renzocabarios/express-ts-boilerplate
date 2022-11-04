
import express, {Express} from "express";
import bodyParser from "body-parser";
import connectDB from "./app/db";
import ENV from "./app/env/index";
import sampleRoute from "./app/route/sample/sample.route";
import cors from 'cors'

const app: Express = express();

// middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/api/v1/sample", sampleRoute);

//initialization
const start = () => {
  console.log(1);
  
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
