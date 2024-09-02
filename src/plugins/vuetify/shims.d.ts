import { IAliases } from './aliases/aliases'

interface _CustomComponents extends IAliases {}

declare module 'vue' {
  export interface GlobalComponents extends _CustomComponents {}
}

declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends _CustomComponents {}
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends _CustomComponents {}
}
