import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './entities/todo.entity';
import { NewTodoInput } from './input/new-todo.input';
import { UpdateTodoInput } from './input/update-todo.input';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Query(() => Todo)
  async todo(@Args('id', { type: () => ID }) id: string): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: NewTodoInput): Promise<Todo> {
    return this.todosService.create(input);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateTodoInput
  ): Promise<Todo> {
    return this.todosService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteTodo(
    @Args('id', { type: () => ID }) id: string
  ): Promise<boolean> {
    return this.todosService.delete(id);
  }
}
