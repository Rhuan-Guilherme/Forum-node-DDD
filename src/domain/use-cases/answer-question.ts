import { Answer } from '../entities/answer';

interface AnswerQustionRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQustionUseCase {
  execute({ instructorId, questionId, content }: AnswerQustionRequest) {
    const answer = new Answer(content);

    return answer;
  }
}
