import { execSync } from 'child_process'
import fs from 'fs'

const tsfiles: string[] = [
    'src/cli.ts',
    'src/server.ts'
]

tsfiles.forEach(file => {
    execSync(`tsup ${file} --format cjs --minify --minify-syntax`, { stdio: 'inherit' })
})

const jsfiles: string[] = [
    'dist/cli.js',
    'dist/server.js'
]

jsfiles.forEach(file => {
    fs.writeFileSync(file, `#!/usr/bin/env node\n${fs.readFileSync(file, 'utf-8')}`, 'utf-8')
    execSync(`chmod -x ${file}`, { stdio: 'inherit' })
})


