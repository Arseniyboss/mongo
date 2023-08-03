/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
