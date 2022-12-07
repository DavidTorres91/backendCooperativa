import {Entity, model, property} from '@loopback/repository';

@model()
export class Prestamo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_cuenta: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaPrestamo: string;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  // describe navigational properties here
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
