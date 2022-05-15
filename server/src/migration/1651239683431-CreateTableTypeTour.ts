import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTypeTour1651239683431 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS TypeTour (
                id INT PRIMARY KEY AUTO_INCREMENT,
                typeName VARCHAR(250) UNIQUE NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS TypeTour
        `);
    }
}
