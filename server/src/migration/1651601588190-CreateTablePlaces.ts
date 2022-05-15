import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePlaces1651601588190 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Places(
                id INT PRIMARY KEY AUTO_INCREMENT,
                namePlaces VARCHAR (250) UNIQUE NOT NULL,
                image VARCHAR (250) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Places
        `);
    }
}
