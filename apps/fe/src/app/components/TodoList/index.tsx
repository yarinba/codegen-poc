import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

import { TodoListItem } from './TodoListItem';
import {
  TodosDocument,
  useToggleTodoCompletionMutation,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useTodosQuery,
} from './operations.generated';

export function TodoList() {
  const [newTodo, setNewTodo] = useState('');

  const { data, loading } = useTodosQuery();

  const [createTodo] = useCreateTodoMutation({
    refetchQueries: [TodosDocument],
  });
  const [toggleTodoCompletion] = useToggleTodoCompletionMutation();

  const [deleteTodo] = useDeleteTodoMutation({
    refetchQueries: [TodosDocument],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await createTodo({
      variables: {
        input: {
          title: newTodo,
        },
      },
    });
    setNewTodo('');
  };

  const handleToggle = async (id: string, completed: boolean) => {
    await toggleTodoCompletion({
      variables: { id, completed },
    });
  };

  const handleDelete = async (id: string) => {
    await deleteTodo({ variables: { id } });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-6">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="input flex-1"
        />
        <button type="submit" className="btn btn-primary">
          <PlusIcon className="h-5 w-5" />
        </button>
      </form>

      <div className="space-y-4">
        {loading ? (
          <div className="text-center text-muted">Loading...</div>
        ) : (
          <AnimatePresence>
            {data?.todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
