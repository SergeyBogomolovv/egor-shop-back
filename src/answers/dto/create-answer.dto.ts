export class CreateAnswerDto {
  pollId: string;
  answer1: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  email: string;
}
