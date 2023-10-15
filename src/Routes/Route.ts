import express from 'express'
import { getData, addData, removeData, edit } from '../Controllers/controller'

const Router = express.Router()


Router.route('/')
    .get(getData())
    .post(addData())

Router.route('/:name')
    .delete(removeData())
    .put(edit())


export default Router