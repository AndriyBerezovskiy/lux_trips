import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableWorld1651239683430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS World (
                id INT PRIMARY KEY AUTO_INCREMENT,
                worldName VARCHAR(250) UNIQUE NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS World
        `);
    }
}
