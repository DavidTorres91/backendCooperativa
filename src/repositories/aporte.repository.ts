import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Aporte, AporteRelations} from '../models';

export class AporteRepository extends DefaultCrudRepository<
  Aporte,
  typeof Aporte.prototype.id,
  AporteRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Aporte, dataSource);
  }
}
