import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const sourceRoot = path.resolve(process.cwd(), 'src ')

function resolveLegacySpacedPaths() {
  return {
    name: 'resolve-legacy-spaced-paths',
    enforce: 'pre',
    resolveId(source, importer) {
      let basePath

      if (source.startsWith('@/')) {
        basePath = path.join(sourceRoot, source.slice(2))
      } else if (source.startsWith('./') || source.startsWith('../')) {
        if (!importer || !path.isAbsolute(importer)) return null
        basePath = path.resolve(path.dirname(importer), source)
      } else {
        return null
      }

      const parsed = path.parse(basePath)
      const relative = path.relative(parsed.root, basePath).split(path.sep)
      const candidates = [parsed.root]

      for (let i = 0; i < relative.length; i++) {
        const segment = relative[i]
        const isLast = i === relative.length - 1
        const options = isLast ? [segment] : [segment, segment + ' ']
        const next = []
        for (const candidate of candidates) {
          for (const option of options) next.push(path.join(candidate, option))
        }
        candidates.splice(0, candidates.length, ...next)
      }

      const extensions = ['', '.jsx', '.js', '.tsx', '.ts', '.json', '.css']
      for (const candidate of candidates) {
        for (const extension of extensions) {
          const file = candidate + extension
          if (fs.existsSync(file) && fs.statSync(file).isFile()) return file
        }
        for (const indexFile of ['index.jsx', 'index.js', 'index.tsx', 'index.ts']) {
          const file = path.join(candidate, indexFile)
          if (fs.existsSync(file) && fs.statSync(file).isFile()) return file
        }
      }

      return null
    },
  }
}

export default defineConfig({
  plugins: [resolveLegacySpacedPaths(), react()],
})
