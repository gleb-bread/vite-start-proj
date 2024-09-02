import * as Models from '@/entities/models'
import * as DTOs from '@/entities/DTOs'
import * as RightDTOTypes from '@/entities/DTOs/right/types'

export class Right implements Models.Model<DTOs.RightDTO.RightDTO> {
  private _key: RightDTOTypes.Rights
  private _title: string

  constructor(dto: DTOs.RightDTO.RightDTO) {
    this._key = dto.key
    this._title = dto.title
  }

  public getDTO(): DTOs.RightDTO.RightDTO {
    return {
      key: this._key,
      title: this._title
    }
  }

  public get title() {
    return this._title
  }

  public get key() {
    return this._title
  }
}
