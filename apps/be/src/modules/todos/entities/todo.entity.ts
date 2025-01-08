import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Date)
  creationDate: Date;

  @Field(() => Boolean)
  completed: boolean;
}
