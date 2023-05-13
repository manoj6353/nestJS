import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cats1683966158773 implements MigrationInterface {
  name = 'Cats1683966158773';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cat\` ADD \`updatedAt\` datetime NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cat\` DROP COLUMN \`updatedAt\``);
  }
}
