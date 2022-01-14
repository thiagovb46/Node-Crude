import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVideos1640377308713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"videos",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                }, 
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "category_id",
                    type: "uuid"
                },
                {
                    name: "duration",
                    type: "numeric"
                }
            ],
            foreignKeys: [
                {
                    "name": "fk_vid eos_category",
                    columnNames: ["category_id"],
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"]
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
    }

}
