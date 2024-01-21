export default {
  roots: [
    "<rootDir>"
  ],
  transformIgnorePatterns: ["node_modules/(?!(node-fetch)/)"],
  testMatch: [
    "/__tests__//*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
