import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTours1651601588192 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Tours (
                id INT PRIMARY KEY AUTO_INCREMENT,
                tourName VARCHAR(250) UNIQUE NOT NULL,
                image VARCHAR (250) UNIQUE NOT NULL, 
                price INT NOT NULL,
                rating INT CHECK ( rating > 0 AND rating <= 5 )NOT NULL,
                countryId INT NOT NULL,
                typeTourId INT NOT NULL,
                placesId INT NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP,

                CONSTRAINT fk_countryId
                FOREIGN KEY (countryId)
                REFERENCES Country(id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
                ,
                CONSTRAINT fk_typeTourId
                FOREIGN KEY (typeTourId)
                REFERENCES TypeTour(id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
                ,
                CONSTRAINT fk_placesId
                FOREIGN KEY (placesId)
                REFERENCES Places(id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Tours
        `);
    }
}
