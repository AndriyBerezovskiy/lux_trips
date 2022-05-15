import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCountry1651239683433 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Country (
                id INT PRIMARY KEY AUTO_INCREMENT,
                countryName VARCHAR (250) UNIQUE NOT NULL,
                worldId INT NOT NULL, 
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP,

                CONSTRAINT fk_worldId
                FOREIGN KEY (worldId)
                REFERENCES World(id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Country
        `);
    }
}
