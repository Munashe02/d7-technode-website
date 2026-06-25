const { spawn } = require('child_process')

const nextBin = require.resolve('next/dist/bin/next')
const forwardedArgs = process.argv.slice(2)
const normalizedArgs =
  forwardedArgs.length === 1 && /^\d+$/.test(forwardedArgs[0])
    ? ['-p', forwardedArgs[0]]
    : forwardedArgs
const args = [nextBin, 'dev', ...normalizedArgs]

const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
  },
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 0)
})
