import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from "./routes.js";


morgan.token('statusColor', (req, res, args) => {
  var status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent)
    ? res.statusCode
    : undefined

  var color = status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
      : status >= 300 ? 36 // cyan
        : status >= 200 ? 32 // green
          : 0 // no color

  return '\x1b[' + color + 'm' + status + '\x1b[0m'
})

export default (app) => {

  console.log('Booting Server...')

  const port = 3000;

  app.set('view cache', false)
  app.use(bodyParser.json({limit: '20mb'}))
  app.use(bodyParser.urlencoded({extended: true}))

  app.use(morgan('\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms'))

  app.use(cors())
  app.use(routes);

  console.log('Server ok')

}