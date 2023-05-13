import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cats1683966085579 implements MigrationInterface {
  name = 'Cats1683966085579';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`photo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`photo\` varchar(255) NOT NULL, \`catsId\` int NOT NULL, \`catId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cat\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`breed\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`createdAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_adacadd458fb4ca56b77be906f6\` FOREIGN KEY (\`catId\`) REFERENCES \`cat\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_adacadd458fb4ca56b77be906f6\``,
    );
    await queryRunner.query(`DROP TABLE \`cat\``);
    await queryRunner.query(`DROP TABLE \`photo\``);
  }
}
