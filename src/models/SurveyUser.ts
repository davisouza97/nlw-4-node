import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {

    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "user_id" })
    userId: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User

    @Column({ name: "survey_id" })
    surveyId: string;

    @ManyToOne(() => Survey)
    @JoinColumn({ name: "survey_id" })
    survey: Survey

    @Column({ name: "value" })
    value: number;

    @CreateDateColumn({ name: "create_at" })
    createAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { SurveyUser };

