import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioDetalle extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_usuario: string;

  @property({
    type: 'string',
    required: false,
  })
  tipoDocumento: string;

  @property({
    type: 'string',
    required: false,
  })
  numeroDocumento: string;

  @property({
    type: 'string',
    required: false,
  })
  correo: string;

  @property({
    type: 'string',
    required: false,
  })
  celular: string;

  @property({
    type: 'string',
    required: false,
  })
  direccion: string;

  @property({
    type: 'date',
    required: false,
  })
  fechaAfiliacion: string;


  constructor(data?: Partial<UsuarioDetalle>) {
    super(data);
  }
}

export interface UsuarioDetalleRelations {
  // describe navigational properties here
}

export type UsuarioDetalleWithRelations = UsuarioDetalle & UsuarioDetalleRelations;
