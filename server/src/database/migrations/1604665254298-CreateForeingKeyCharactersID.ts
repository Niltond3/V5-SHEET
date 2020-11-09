import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from 'typeorm';

export default class CreateForeingKeyCharactersID1604665254298
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'players',
      new TableColumn({
        name: 'characters_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'players',
      new TableForeignKey({
        name: 'player_characters',
        columnNames: ['characters_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'characters',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('players', 'player_characters');
    await queryRunner.dropColumn('players', 'characters_id');
  }
}
