import * as Types from '@codegen-poc/types';

import { gql } from '@apollo/client';
import { TodoLeanFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean }> };

export type CreateTodoMutationVariables = Types.Exact<{
  input: Types.NewTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, description: string, completed: boolean, creationDate: any } };

export type ToggleTodoCompletionMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  completed: Types.Scalars['Boolean']['input'];
}>;


export type ToggleTodoCompletionMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, completed: boolean } };

export type DeleteTodoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean };


export const TodosDocument = gql`
    query Todos {
  todos {
    ...TodoLean
  }
}
    ${TodoLeanFragmentDoc}`;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export function useTodosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosSuspenseQueryHookResult = ReturnType<typeof useTodosSuspenseQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($input: NewTodoInput!) {
  createTodo(input: $input) {
    id
    title
    description
    completed
    creationDate
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const ToggleTodoCompletionDocument = gql`
    mutation ToggleTodoCompletion($id: ID!, $completed: Boolean!) {
  updateTodo(id: $id, input: {completed: $completed}) {
    id
    completed
  }
}
    `;
export type ToggleTodoCompletionMutationFn = Apollo.MutationFunction<ToggleTodoCompletionMutation, ToggleTodoCompletionMutationVariables>;

/**
 * __useToggleTodoCompletionMutation__
 *
 * To run a mutation, you first call `useToggleTodoCompletionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoCompletionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoCompletionMutation, { data, loading, error }] = useToggleTodoCompletionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      completed: // value for 'completed'
 *   },
 * });
 */
export function useToggleTodoCompletionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTodoCompletionMutation, ToggleTodoCompletionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTodoCompletionMutation, ToggleTodoCompletionMutationVariables>(ToggleTodoCompletionDocument, options);
      }
export type ToggleTodoCompletionMutationHookResult = ReturnType<typeof useToggleTodoCompletionMutation>;
export type ToggleTodoCompletionMutationResult = Apollo.MutationResult<ToggleTodoCompletionMutation>;
export type ToggleTodoCompletionMutationOptions = Apollo.BaseMutationOptions<ToggleTodoCompletionMutation, ToggleTodoCompletionMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;