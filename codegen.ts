import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'apps/be/schema.gql',
  generates: {
    'apps/fe': {
      documents: ['apps/**/*.graphql', 'libs/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '~@codegen-poc/types',
        extension: '.generated.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {},
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
      config: {},
    },
    'libs/types/src/types.generated.ts': {
      plugins: ['typescript'],
      config: {},
    },
  },
};

export default config;