import { createRequire } from 'module'
import { pathsToModuleNameMapper } from 'ts-jest'
const require = createRequire(import.meta.url)
const tsconfig = require('./tsconfig.json')

const compilerOptions = tsconfig.compilerOptions

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [
    '<rootDir>'
  ]
}