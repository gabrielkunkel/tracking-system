import { Container } from "inversify";
import db from "./db";

const DIContainer = new Container();

DIContainer.bind<db>(db).toSelf();

export default DIContainer;