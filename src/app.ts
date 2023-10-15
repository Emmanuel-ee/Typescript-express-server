import express from 'express'
import Router from './Routes/Route'

const app = express()

app.use(express.json())

app.use(Router)





export default app