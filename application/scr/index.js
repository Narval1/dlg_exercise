import Server from './server'
require('dotenv').config()

const run = async () => {
  try {
    Server.start()
  } catch (error) {
    console.log('server could not start due error:')
    console.log(error)
  }
}

run()
