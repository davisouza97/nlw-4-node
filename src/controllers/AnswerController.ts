import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository";

class AnswerController {


    //http://localhost:3333/answers/1?u=f88221b0-90e9-4c03-af1d-0eb254edc795
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUserRepository = getCustomRepository(SurveyUserRepository);

        const surveyUser = await surveysUserRepository.findOne({ id: String(u) });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!");
        }

        surveyUser.value = Number(value);

        await surveysUserRepository.save(surveyUser);

        return response.json(surveyUser)
    }
}

export { AnswerController }