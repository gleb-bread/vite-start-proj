import * as Repositories from '@/entities/repositories'
import * as DTOs from '@/entities/DTOs'
import * as RightTemplates from './templates'

export class Right extends Repositories.ARepository.ARepository {
  constructor(config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig) {
    super('/api/rights', config)
  }

  async getRights() {
    return RightTemplates.Rights.map(DTOs.RightDTO.toModel)
  }
}
