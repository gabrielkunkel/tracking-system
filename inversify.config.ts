import { Container } from "inversify";
import db from "./db";
import TYPES from "./contracts/types";

const DIContainer = new Container();

DIContainer.bind<db>(TYPES.db).to(db);

export default DIContainer;