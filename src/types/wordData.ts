export enum WordType {
  Verb = 'Verb',
}

interface VerbSourseDataBase<T extends boolean> {
  readonly infinitive: string
  readonly isRegular: T
}

export interface RegularVerbSourseData extends VerbSourseDataBase<true> {}

export interface IregularVerbSourseData extends VerbSourseDataBase<false> {
  readonly secondForm: string
  readonly thirdForm: string
}

export type VerbSourseData = RegularVerbSourseData | IregularVerbSourseData
