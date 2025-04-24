import { AnswerRepositoryInterface } from '../../repositories/answer-repository';
import { Answer } from '../entities/answer';

interface AnswerQustionRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQustionUseCase {
  constructor(private answerRepository: AnswerRepositoryInterface) {}

  async execute({ instructorId, questionId, content }: AnswerQustionRequest) {
    const answer = new Answer({
      authorId: instructorId,
      content,
      questionId,
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}
