import { motion } from 'framer-motion';
import { Checkbox } from '@radix-ui/react-checkbox';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { Todo } from '../Todo';

import type { TodoLeanFragment } from './fragments.generated';

interface Props {
  todo: TodoLeanFragment;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function TodoListItem({ todo, onToggle, onDelete }: Props) {
  const { id, title, completed } = todo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="group flex items-center gap-4 rounded-lg border border-border bg-background/50 p-4 backdrop-blur-sm transition-colors hover:border-accent"
      >
        <Checkbox
          checked={completed}
          onCheckedChange={(checked) => onToggle(id, checked as boolean)}
          className={clsx(
            'flex h-5 w-5 items-center justify-center rounded border transition-colors',
            completed ? 'border-accent bg-accent' : 'border-border'
          )}
        >
          <CheckIcon className="h-4 w-4 text-white" />
        </Checkbox>

        <div
          className="flex-1 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <span
            className={clsx(
              'block text-sm transition-colors',
              completed && 'text-muted line-through'
            )}
          >
            {title}
          </span>
        </div>

        <button
          onClick={() => onDelete(id)}
          className="invisible group-hover:visible rounded-lg p-1 text-muted hover:text-foreground"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </motion.div>

      <Todo
        todoId={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
