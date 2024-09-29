import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
	testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
