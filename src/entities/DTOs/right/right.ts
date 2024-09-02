import { type Rights } from './types'
import * as Models from '@/entities/models'

export type RightDTO = {
  key: Rights
  title: string
}

export const toModel = function (dto: RightDTO): Models.Right {
  return new Models.Right(dto)
}
