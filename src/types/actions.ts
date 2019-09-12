import { State } from './states'
import { ActionType } from './actionTypes'
import { SetterActionBase, ActionBase } from './actionBase'

export type GetState = () => State

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void
export type ChainableThunkAction<T> = (dispatch: Dispatch, getState: GetState) => Promise<T>
export type AllActions = Action | ThunkAction

export interface Dispatch {
  <T>(action: ChainableThunkAction<T>): Promise<T>
  (action: Action | ThunkAction ): void
}

export type Action = string
