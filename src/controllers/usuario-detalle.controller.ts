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
import {UsuarioDetalle} from '../models';
import {UsuarioDetalleRepository} from '../repositories';

export class UsuarioDetalleController {
  constructor(
    @repository(UsuarioDetalleRepository)
    public usuarioDetalleRepository : UsuarioDetalleRepository,
  ) {}

  @post('/usuario-detalles')
  @response(200, {
    description: 'UsuarioDetalle model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioDetalle)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioDetalle, {
            title: 'NewUsuarioDetalle',
            exclude: ['id'],
          }),
        },
      },
    })
    usuarioDetalle: Omit<UsuarioDetalle, 'id'>,
  ): Promise<UsuarioDetalle> {
    return this.usuarioDetalleRepository.create(usuarioDetalle);
  }

  @get('/usuario-detalles/count')
  @response(200, {
    description: 'UsuarioDetalle model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioDetalle) where?: Where<UsuarioDetalle>,
  ): Promise<Count> {
    return this.usuarioDetalleRepository.count(where);
  }

  @get('/usuario-detalles')
  @response(200, {
    description: 'Array of UsuarioDetalle model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioDetalle, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioDetalle) filter?: Filter<UsuarioDetalle>,
  ): Promise<UsuarioDetalle[]> {
    return this.usuarioDetalleRepository.find(filter);
  }

  @patch('/usuario-detalles')
  @response(200, {
    description: 'UsuarioDetalle PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioDetalle, {partial: true}),
        },
      },
    })
    usuarioDetalle: UsuarioDetalle,
    @param.where(UsuarioDetalle) where?: Where<UsuarioDetalle>,
  ): Promise<Count> {
    return this.usuarioDetalleRepository.updateAll(usuarioDetalle, where);
  }

  @get('/usuario-detalles/{id}')
  @response(200, {
    description: 'UsuarioDetalle model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioDetalle, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(UsuarioDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioDetalle>
  ): Promise<UsuarioDetalle> {
    return this.usuarioDetalleRepository.findById(id, filter);
  }

  @patch('/usuario-detalles/{id}')
  @response(204, {
    description: 'UsuarioDetalle PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioDetalle, {partial: true}),
        },
      },
    })
    usuarioDetalle: UsuarioDetalle,
  ): Promise<void> {
    await this.usuarioDetalleRepository.updateById(id, usuarioDetalle);
  }

  @put('/usuario-detalles/{id}')
  @response(204, {
    description: 'UsuarioDetalle PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() usuarioDetalle: UsuarioDetalle,
  ): Promise<void> {
    await this.usuarioDetalleRepository.replaceById(id, usuarioDetalle);
  }

  @del('/usuario-detalles/{id}')
  @response(204, {
    description: 'UsuarioDetalle DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.usuarioDetalleRepository.deleteById(id);
  }
}
