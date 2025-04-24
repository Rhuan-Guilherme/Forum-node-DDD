import { Answer } from '../domain/entities/answer';

export interface AnswerRepositoryInterface {
  create(answer: Answer): Promise<void>;
}
