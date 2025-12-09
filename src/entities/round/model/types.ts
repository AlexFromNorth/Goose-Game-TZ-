import { RoundStatus } from './constants'

export type RoundStatusValue = (typeof RoundStatus)[keyof typeof RoundStatus]
