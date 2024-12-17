import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import categoriesActions from "./modules/categories/categoriesActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";
import sayWelcome from "./modules/item/sayActions";
import seriesActions from "./modules/item/seriesActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/", sayWelcome);
router.get("/api/programs/:id", seriesActions.read);

router.get("/api/programs", seriesActions.browse);
router.get("/api/categories/", categoriesActions.browse);
router.get("/api/categories/:id", categoriesActions.read);

/* ************************************************************************* */

export default router;
