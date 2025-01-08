import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { TodosModule } from '../todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/be/schema.gql'),
      sortSchema: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}
