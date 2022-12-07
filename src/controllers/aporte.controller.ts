import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Aporte} from '../models';
import {AporteRepository} from '../repositories';

export class AporteController {
  constructor(
    @repository(AporteRepository)
    public aporteRepository : AporteRepository,
  ) {}

  @post('/aportes')
  @response(200, {
    description: 'Aporte model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aporte)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aporte, {
            title: 'NewAporte',
            exclude: ['id'],
          }),
        },
      },
    })
    aporte: Omit<Aporte, 'id'>,
  ): Promise<Aporte> {
    return this.aporteRepository.create(aporte);
  }

  @get('/aportes/count')
  @response(200, {
    description: 'Aporte model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aporte) where?: Where<Aporte>,
  ): Promise<Count> {
    return this.aporteRepository.count(where);
  }

  @get('/aportes')
  @response(200, {
    description: 'Array of Aporte model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aporte, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aporte) filter?: Filter<Aporte>,
  ): Promise<Aporte[]> {
    return this.aporteRepository.find(filter);
  }

  @patch('/aportes')
  @response(200, {
    description: 'Aporte PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aporte, {partial: true}),
        },
      },
    })
    aporte: Aporte,
    @param.where(Aporte) where?: Where<Aporte>,
  ): Promise<Count> {
    return this.aporteRepository.updateAll(aporte, where);
  }

  @get('/aportes/{id}')
  @response(200, {
    description: 'Aporte model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aporte, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Aporte, {exclude: 'where'}) filter?: FilterExcludingWhere<Aporte>
  ): Promise<Aporte> {
    return this.aporteRepository.findById(id, filter);
  }

  @patch('/aportes/{id}')
  @response(204, {
    description: 'Aporte PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aporte, {partial: true}),
        },
      },
    })
    aporte: Aporte,
  ): Promise<void> {
    await this.aporteRepository.updateById(id, aporte);
  }

  @put('/aportes/{id}')
  @response(204, {
    description: 'Aporte PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aporte: Aporte,
  ): Promise<void> {
    await this.aporteRepository.replaceById(id, aporte);
  }

  @del('/aportes/{id}')
  @response(204, {
    description: 'Aporte DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aporteRepository.deleteById(id);
  }
}
