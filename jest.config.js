export default {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
