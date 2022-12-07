import {Entity, model, property} from '@loopback/repository';

@model({settings: {
  strictObjectIDCoercion: true
}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaRegistro: string;

  @property({
    type: 'number',
    default: 0,
  })
  saldo?: number;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
