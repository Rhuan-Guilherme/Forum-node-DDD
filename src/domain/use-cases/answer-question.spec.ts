import { expect, test } from 'vitest';
import { AnswerQustionUseCase } from './answer-question';
import { AnswerRepositoryInterface } from '../../repositories/answer-repository';
import { Answer } from '../entities/answer';

let fakeAnswerRepository: AnswerRepositoryInterface = {
  create: async (answer: Answer) => {
    return;
  },
};

test('Create answer', async () => {
  const answerQustion = new AnswerQustionUseCase(fakeAnswerRepository);

  const answer = await answerQustion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta.',
  });

  console.log(answer);

  expect(answer.content).toEqual('Nova resposta.');
});
