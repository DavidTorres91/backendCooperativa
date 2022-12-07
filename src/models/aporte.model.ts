import {Entity, model, property} from '@loopback/repository';

@model()
export class Aporte extends Entity {
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
  fechaAporte: string;


  constructor(data?: Partial<Aporte>) {
    super(data);
  }
}

export interface AporteRelations {
  // describe navigational properties here
}

export type AporteWithRelations = Aporte & AporteRelations;
