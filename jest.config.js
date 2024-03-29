/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  modulePathIgnorePatterns: ["__classes__"],
  collectCoverageFrom: ["src/{!(Utility),}/{!(**.Interface),}.{ts,js}"],
};