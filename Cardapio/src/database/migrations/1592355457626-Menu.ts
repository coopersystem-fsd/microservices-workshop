import {MigrationInterface, QueryRunner} from "typeorm";

export class Menu1592355457626 implements MigrationInterface {
    name = 'Menu1592355457626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plate_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8a87eb9a2669badd9a6a408c893" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plates" ("id" SERIAL NOT NULL, "slug_restaurant" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "src_picture" character varying NOT NULL, "price" double precision NOT NULL, "discount" double precision NOT NULL, "plate_type_id" integer, "cooking_id" integer, CONSTRAINT "PK_9a8950ff576a33188d5afcbdbe6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cookings" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_ffc4e2fed4b029c7db02290d895" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "plates" ADD CONSTRAINT "FK_236ca575b5f30322651b1ffc26d" FOREIGN KEY ("plate_type_id") REFERENCES "plate_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plates" ADD CONSTRAINT "FK_9bc1b4ff8fc713555761d67595c" FOREIGN KEY ("cooking_id") REFERENCES "cookings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plates" DROP CONSTRAINT "FK_9bc1b4ff8fc713555761d67595c"`);
        await queryRunner.query(`ALTER TABLE "plates" DROP CONSTRAINT "FK_236ca575b5f30322651b1ffc26d"`);
        await queryRunner.query(`DROP TABLE "cookings"`);
        await queryRunner.query(`DROP TABLE "plates"`);
        await queryRunner.query(`DROP TABLE "plate_types"`);
    }

}
