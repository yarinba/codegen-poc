import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { dateFormatter } from '@codegen-poc/utils';

import { useTodoQuery, useUpdateTodoMutation } from './operations.generated';

interface Props {
  todoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Todo({ todoId, isOpen, onClose }: Props) {
  const { data, loading } = useTodoQuery({
    variables: { id: todoId },
    skip: !isOpen,
  });

  const [updateTodo] = useUpdateTodoMutation();
  const [title, setTitle] = useState(data?.todo.title ?? '');
  const [description, setDescription] = useState(data?.todo.description ?? '');

  // Update local state when data changes
  useEffect(() => {
    if (data?.todo) {
      setTitle(data.todo.title);
      setDescription(data.todo.description ?? '');
    }
  }, [data?.todo]);

  const handleSave = async () => {
    if (!data?.todo) return;

    await updateTodo({
      variables: {
        id: todoId,
        input: { title, description },
      },
    });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">
              Edit Todo
            </Dialog.Title>
            <Dialog.Close className="rounded-lg p-1.5 text-muted hover:bg-accent/10 hover:text-foreground">
              <XMarkIcon className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {loading ? (
            <div className="mt-4 text-sm text-muted">Loading...</div>
          ) : (
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              {data?.todo.creationDate && (
                <div className="pt-2">
                  <span className="text-sm text-muted">
                    Created on{' '}
                    {dateFormatter.format(new Date(data.todo.creationDate))}
                  </span>
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="rounded-lg px-4 py-2 text-sm text-muted hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="rounded-lg bg-accent px-4 py-2 text-sm text-white hover:bg-accent/90"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
