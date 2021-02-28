import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Survey {

    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "title" })
    title: string;

    @Column({ name: "description" })
    description: string;

    @CreateDateColumn({ name: "create_at" })
    createAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Survey };
