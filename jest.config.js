module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/coverage", "<rootDir>/dist"],
  moduleDirectories: ["node_modules", "src", "pages", "styles"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "@src/(.*)": "<rootDir>/src/$1",
    "@pages/(.*)": "<rootDir>/pages/$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
  },
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  coverageDirectory: "coverage",
};
