const nextJest = require('next/jest')
const { resolve } = require('path')

const root = resolve(__dirname, './')

const createJestConfig = nextJest({
  dir: root,
})


/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',

  setupFiles: ['<rootDir>/setupTestsEnv.ts'],

  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  // should contain `test` or `spec`.
  testRegex: "(test|spec)\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

module.exports = createJestConfig(customJestConfig)
