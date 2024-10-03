export class CreatePollDto {
  title: string;
  questions: { question: string }[];
}
