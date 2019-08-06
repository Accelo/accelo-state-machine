module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    "transform": {
      "^.+\\.ts?$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/core-pr/node_modules/"
    ],
  }