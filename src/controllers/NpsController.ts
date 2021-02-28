import { Request, Response } from "express";
import { getCustomRepository, IsNull, Not } from "typeorm";
import { SurveyUserRepository } from "../repositories/SurveyUserRepository";


class NpsController {
    async execute(request: Request, response: Response) {


        const { surveyId } = request.params;

        const surveyUserRepository = getCustomRepository(SurveyUserRepository);

        const surveyUsers = await surveyUserRepository.find({ surveyId, value: Not(IsNull()) });

        const detractors = surveyUsers.filter(
            (survey) => (survey.value >= 0 && survey.value <= 6)
        )

        const promoters = surveyUsers.filter(
            (survey) => (survey.value >= 9 && survey.value <= 10)
        )

        const passives = surveyUsers.filter(
            (survey) => (survey.value >= 7 && survey.value <= 8)
        )

        const totalAnswers = surveyUsers.length;

        const nps = Number((((promoters.length - detractors.length) / totalAnswers) * 100).toFixed(2));

        return response.json({
            nps,
            totalAnswers,
            totalPromoters: promoters.length,
            totalDetratctors: detractors.length,
            totalPassives: passives.length,
        })

    }
}

export { NpsController }