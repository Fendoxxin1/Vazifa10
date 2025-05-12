import { Router } from "express";
import { GuruhController } from "../controllers/guruhlar.controller.js";

const router = Router();
const controller = new GuruhController();

router
  .post("/", controller.createGuruh)
  .get("/", controller.getAllGuruhlar)
  .get("/:id", controller.getGuruhById)
  .put("/:id", controller.updateGuruhById)
  .delete("/:id", controller.deleteGuruhById);

export default router;
