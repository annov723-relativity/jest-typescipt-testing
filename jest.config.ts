import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this based on your project's directory structure
  },
  testMatch: ['<rootDir>/**/*.test.(ts|tsx|js|jsx)'], //to find tests
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Adjust if your tsconfig file is located elsewhere
    },
  },
};

export default config;
