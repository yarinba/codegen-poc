import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewTodoInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  description: string;
}
