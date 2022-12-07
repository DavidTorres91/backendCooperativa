import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Prestamo, PrestamoRelations} from '../models';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.id,
  PrestamoRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Prestamo, dataSource);
  }
}
