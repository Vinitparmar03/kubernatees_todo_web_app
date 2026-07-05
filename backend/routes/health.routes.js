import express from 'express'
import { livenessCheck, readinessCheck } from '../controllers/health.controller.js'

const Router = express.Router()

Router.get('/live', livenessCheck)
Router.get('/ready', readinessCheck)


export default Router