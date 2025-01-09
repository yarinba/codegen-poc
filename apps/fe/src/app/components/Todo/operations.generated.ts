import * as Types from '@codegen-poc/types';

import { gql } from '@apollo/client';
import { TodoLeanFragmentDoc } from '../TodoList/fragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TodoFragment = { __typename?: 'Todo', description: string, creationDate: any, id: string, title: string, completed: boolean };

export type TodoQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type TodoQuery = { __typename?: 'Query', todo: { __typename?: 'Todo', description: string, creationDate: any, id: string, title: string, completed: boolean } };

export type UpdateTodoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  input: Types.UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', description: string, creationDate: any, id: string, title: string, completed: boolean } };

export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  ...TodoLean
  description
  creationDate
}
    ${TodoLeanFragmentDoc}`;
export const TodoDocument = gql`
    query Todo($id: ID!) {
  todo(id: $id) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQuery(baseOptions: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables> & ({ variables: TodoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
      }
export function useTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export function useTodoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoSuspenseQueryHookResult = ReturnType<typeof useTodoSuspenseQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;