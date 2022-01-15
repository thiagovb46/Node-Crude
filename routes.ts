import {Router} from "express"
import { CreateCategoryController } from "./src/controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./src/controllers/GetAllCategoriesController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle)

export {routes}