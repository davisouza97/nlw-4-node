import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn({ name: "id" })
    readonly id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "email" })
    email: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}


export { User };