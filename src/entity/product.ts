import {Column, Entity, ObjectIdColumn} from "typeorm";

@Entity()
export class Product {
    @ObjectIdColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    image!: string;

    @Column()
    price!: number;
}
