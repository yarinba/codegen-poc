import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
        <main className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
            Todo App
          </h1>
          <TodoList />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
