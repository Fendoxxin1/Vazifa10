import { Router } from "express";
import { TalabalarController } from "../controllers/talabalar.controller.js";

const router = Router();
const controller = new TalabalarController();

router
  .post("/", controller.crateTalaba)
  .get("/", controller.getAllTalabalar)
  .get("/:id", controller.getTalabaById)
  .put("/:id", controller.updateTalabaById)
  .delete("/:id", controller.deleteTalabaById);

export default router;
