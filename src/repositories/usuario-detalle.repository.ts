import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {UsuarioDetalle, UsuarioDetalleRelations} from '../models';

export class UsuarioDetalleRepository extends DefaultCrudRepository<
  UsuarioDetalle,
  typeof UsuarioDetalle.prototype.id,
  UsuarioDetalleRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(UsuarioDetalle, dataSource);
  }
}
