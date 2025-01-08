import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { NewTodoInput } from './input/new-todo.input';
import { UpdateTodoInput } from './input/update-todo.input';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findOne(id: string): Promise<Todo> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async create(input: NewTodoInput): Promise<Todo> {
    const todo: Todo = {
      id: uuidv4(),
      title: input.title,
      description: input.description || '',
      completed: false,
      creationDate: new Date(),
    };

    this.todos.push(todo);
    return todo;
  }

  async update(id: string, input: UpdateTodoInput): Promise<Todo> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    const todo = this.todos[todoIndex];
    const updatedTodo = {
      ...todo,
      ...input,
    };

    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }

  async delete(id: string): Promise<boolean> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    this.todos.splice(todoIndex, 1);
    return true;
  }
}
