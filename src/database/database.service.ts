import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export const DEFAULT_CONNECTION = 'default';

@Injectable()
export class DatabaseService {
  private dataSource: DataSource;

  async initialize(options: Partial<DataSourceOptions>) {
    if (this.dataSource && this.dataSource.isInitialized)
      return this.dataSource;

    const entitiesGlob = path.join(__dirname, '../**/*.entity.{ts,js}');

    const connectionOptions: DataSourceOptions = {
      type: 'postgres',
      name: DEFAULT_CONNECTION,
      entities: [entitiesGlob],
      synchronize: false,
      logging: false,
      ...(options as DataSourceOptions),
    };

    this.dataSource = new DataSource(connectionOptions);
    await this.dataSource.initialize();
    return this.dataSource;
  }

  getDataSource(): DataSource {
    if (!this.dataSource)
      throw new Error('DatabaseService not initialized yet');
    return this.dataSource;
  }
}
