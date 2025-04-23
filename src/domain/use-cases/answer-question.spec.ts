import { expect, test } from 'vitest';
import { AnswerQustionUseCase } from './answer-question';

test('Create answer', () => {
  const answerQustion = new AnswerQustionUseCase();

  const answer = answerQustion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta.',
  });

  expect(answer.content).toEqual('Nova resposta.');
});
