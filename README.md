# GraphQL Code Generation Demo

This project demonstrates the capabilities of GraphQL Code Generation using the `near-operation-file-preset` configuration. It showcases how to efficiently work with generated Apollo hooks from `.graphql` files in a React and NestJS monorepo setup.

## Features

- Frontend (React) and Backend (NestJS) applications
- GraphQL code generation with `near-operation-file-preset`
- Auto-generated TypeScript types and React hooks
- Real-time code generation watching

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Installation

1. Install dependencies:

```bash
npm install
```

### Running the Applications

To start both frontend and backend applications in parallel:

```bash
npm start
```

This will:

- Start the frontend application at `http://localhost:4200`
- Start the backend application at `http://localhost:3000`

### GraphQL Code Generation

To start the GraphQL code generation in watch mode:

```bash
npm run codegen
```

This will:

- Watch for changes in your `.graphql` files
- Generate TypeScript types and React hooks
- Place generated files next to your GraphQL operation files
- Update the central types in `libs/types/src/types.generated.ts`

## Project Structure

- `apps/fe/` - Frontend React application
- `apps/be/` - Backend NestJS application
- `libs/types/` - Shared TypeScript types
- `*.graphql` - GraphQL operation files (queries, mutations, fragments)

## Development Workflow

1. Define your GraphQL operations in `.graphql` files
2. Run `npm run codegen` to generate TypeScript types and hooks
3. Import and use the generated hooks in your React components
4. The generated files will be placed next to your `.graphql` files with a `.generated.ts` extension

## Configuration

The GraphQL code generation is configured in `codegen.ts`.
