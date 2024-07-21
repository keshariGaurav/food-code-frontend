// jest.config.js
export default {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
  testMatch: [
    "**/__tests__/**/*.+(js|jsx)",
    "**/?(*.)+(spec|test).+(js|jsx)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testEnvironmentOptions: {
    url: 'http://localhost:5173'
  }
};
