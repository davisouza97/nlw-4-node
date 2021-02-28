import { Router } from "express";
import { AnswerController } from "./src/controllers/AnswerController";
import { SendMailController } from "./src/controllers/SendMailController";
import { SurveyController } from "./src/controllers/SurveyController";
import { UserController } from "./src/controllers/UserController";
import { NpsController } from "./src/controllers/NpsController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController()


router.post("/users", userController.create);

router.post("/surveys", surveyController.create);

router.get("/surveys", surveyController.show);

router.post("/send-mail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:surveyId", npsController.execute);

export { router };
