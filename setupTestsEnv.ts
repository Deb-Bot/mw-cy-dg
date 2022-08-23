import { loadEnvConfig } from '@next/env'
import path from 'path'

const root = path.resolve(__dirname, './')

const setupTestsEnv = async (): Promise<void> => {
  loadEnvConfig(root)
}

export default setupTestsEnv
