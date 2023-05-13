import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  username: 'root',
  password: 'root',
  database: 'test',
  entities: ['dist/src/**/entities/*.js'],
  migrations: ['dist/db/migration/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
