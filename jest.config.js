module.exports = {
    clearMocks: true,
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: [
      "**/tests/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions:['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    }
  }