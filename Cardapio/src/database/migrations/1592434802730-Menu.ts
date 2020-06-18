import {MigrationInterface, QueryRunner} from "typeorm";

export class Menu1592434802730 implements MigrationInterface {
    name = 'Menu1592434802730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plate_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8a87eb9a2669badd9a6a408c893" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cookings" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_ffc4e2fed4b029c7db02290d895" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plates" ("id" SERIAL NOT NULL, "slug_restaurant" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "src_picture" character varying NOT NULL, "price" double precision NOT NULL, "discount" double precision NOT NULL, "plate_type_id" integer, "cooking_id" integer, CONSTRAINT "PK_9a8950ff576a33188d5afcbdbe6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "avaliations" ("id" SERIAL NOT NULL, "cpf_user" character varying NOT NULL, "avaliation" integer NOT NULL, "plate_id" integer, CONSTRAINT "PK_5b5462ad51d5bad006c10689b6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "qtd" integer NOT NULL, "measure" integer NOT NULL, CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredients_plates_plates" ("ingredients_id" integer NOT NULL, "plates_id" integer NOT NULL, CONSTRAINT "PK_d39cf66882d66a924907f79942d" PRIMARY KEY ("ingredients_id", "plates_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2f266cf07e8f3dae3acdb075fe" ON "ingredients_plates_plates" ("ingredients_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_865b4e2537473800fb2ab81d7e" ON "ingredients_plates_plates" ("plates_id") `);
        await queryRunner.query(`ALTER TABLE "plates" ADD CONSTRAINT "FK_236ca575b5f30322651b1ffc26d" FOREIGN KEY ("plate_type_id") REFERENCES "plate_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plates" ADD CONSTRAINT "FK_9bc1b4ff8fc713555761d67595c" FOREIGN KEY ("cooking_id") REFERENCES "cookings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliations" ADD CONSTRAINT "FK_6de1c6aca2c0e6088c261ad0a4c" FOREIGN KEY ("plate_id") REFERENCES "plates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredients_plates_plates" ADD CONSTRAINT "FK_2f266cf07e8f3dae3acdb075fe4" FOREIGN KEY ("ingredients_id") REFERENCES "ingredients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredients_plates_plates" ADD CONSTRAINT "FK_865b4e2537473800fb2ab81d7e1" FOREIGN KEY ("plates_id") REFERENCES "plates"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients_plates_plates" DROP CONSTRAINT "FK_865b4e2537473800fb2ab81d7e1"`);
        await queryRunner.query(`ALTER TABLE "ingredients_plates_plates" DROP CONSTRAINT "FK_2f266cf07e8f3dae3acdb075fe4"`);
        await queryRunner.query(`ALTER TABLE "avaliations" DROP CONSTRAINT "FK_6de1c6aca2c0e6088c261ad0a4c"`);
        await queryRunner.query(`ALTER TABLE "plates" DROP CONSTRAINT "FK_9bc1b4ff8fc713555761d67595c"`);
        await queryRunner.query(`ALTER TABLE "plates" DROP CONSTRAINT "FK_236ca575b5f30322651b1ffc26d"`);
        await queryRunner.query(`DROP INDEX "IDX_865b4e2537473800fb2ab81d7e"`);
        await queryRunner.query(`DROP INDEX "IDX_2f266cf07e8f3dae3acdb075fe"`);
        await queryRunner.query(`DROP TABLE "ingredients_plates_plates"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
        await queryRunner.query(`DROP TABLE "avaliations"`);
        await queryRunner.query(`DROP TABLE "plates"`);
        await queryRunner.query(`DROP TABLE "cookings"`);
        await queryRunner.query(`DROP TABLE "plate_types"`);
    }

}
