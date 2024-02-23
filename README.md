# Frontend - Next.js Template

This project is a Next.js 14 template using Typescript developed by **Horizon Software Development**. It provides a solid starting point for the projects used by the company.

## Local Development Requirements

- Node.js >=18.17.0

## Folder Structure

- app: Page and layout declaration
- asset: Assets like images, fonts, etc.
- components: React components
- constants: Constant values used across the application
- hooks: Custom React hooks
- services: Services functions to interact with external systems
- store: State management files
- styles: CSS files declaration
- utils: Utility functions
- @types: Types declaration files. Use this when there is no types from a library.
- app/providers.tsx: Place all of your providers in this file

## Libraries Used

This projects uses the following libraries:

- [Next.js 14](https://nextjs.org/docs): Fullstack React Framework with the App Router
- React: UI library
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): Global state Manager
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview): Async state manager
- Axios: HTTP client
- [Zod](https://zod.dev/): Schema validation
- [Radix](https://www.radix-ui.com/primitives): Components Library

## NPM Scripts

Use yarn for running the scripts and installing dependencies.

- `yarn dev`: Runs the application in development mode
- `yarn build`: Builds the application for production
- `yarn start`: Starts the production server
- `yarn cypress:open`: Runs the E2E testing suite powered by Cypress

## Testing

## Unit test - Jest and React Testing Library

Jest and React Testing Library are used for unit testing in this project. They provide a way to test individual components in isolation and ensure they are working as expected.

**Good to know**: Test only client components and utility functions. Jest does not support server components. To test them use E2E testing.

To use Jest and React Testing Library in this project, follow these steps:

1. **Run Tests**: You can run all the tests in the project by running `yarn test`. This will run Jest and output the results in your terminal.

2. **Watch Tests**: If you want Jest to automatically re-run your tests when files change, you can use the `yarn test:watch` command.

3. **Write Tests**: Each component should have a corresponding test file. Follow the `SimpleClientComponent` folder structure example. To write a test, use the `test` or `it` function to define the test, and `expect` to make assertions.

For more information about the exported functions in React Testing Library, check out their [cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)

### E2E - Cypress

Cypress is a powerful end-to-end testing framework that makes it easy to test applications in a real browser environment. It is already defined in the package.json so no need to install it again.

To use Cypress in this project, follow these steps:

1. **Open Cypress**: You can open the Cypress Test Runner by running `yarn cypress:open`. This will open a new window where you can see all your test files.

2. **Run Tests**: Click on a test file to run it. Cypress will open a new browser window and run the tests in that file. You can watch the tests run in real time and see the results in the Test Runner.

3. **Write Tests**: Tests are written in the `cypress/e2e` directory. Each test file corresponds to a set of tests for a specific part of your application. To write a test, use the `it` function to define the test and the `cy` object to interact with your application.

Remember, end-to-end tests should cover the main user flows of your application. They should test the application as a whole, rather than individual functions or components.

It is recommend to test the application with the production code so make sure to build and run the production application locally.

Run `yarn build` && `yarn start` to build your Next.js application, then run cypress in another terminal window to start Cypress and run your E2E testing suite.

For more information, check out the [Cypress Documentation](https://docs.cypress.io/).