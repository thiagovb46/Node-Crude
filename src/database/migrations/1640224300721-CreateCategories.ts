import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateCategories1640224300721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"categories",
            columns: [{
                name: "id",
                type:"uuid",
                isPrimary: true
            },
            {
                name: "name",
                type: "varchar",
                isUnique: true
            },
            {
                name:"description",
                type: "varchar"
            },
            {
                name: "created_at",
                type: "Timestamp",
                default: "now()"
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
