import * as Types from '@codegen-poc/types';

import { gql } from '@apollo/client';
export type TodoLeanFragment = { __typename?: 'Todo', id: string, title: string, completed: boolean };

export const TodoLeanFragmentDoc = gql`
    fragment TodoLean on Todo {
  id
  title
  completed
}
    `;