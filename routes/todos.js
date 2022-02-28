import { Router } from 'express'
import * as todosCtrl from "../controllers/todos.js"
const router = Router()

/* GET users listing. */
// GET - localhost:3000/todos
router.get('/', todosCtrl.index)
// GET - localhost:3000/todos/new
router.get("/new", todosCtrl.new)
// GET - localhost:3000/todos/:id
router.get("/:id", todosCtrl.show)

// POST - localhost:3000/todos
router.post("/", todosCtrl.create)

// DELETE - localhost:3000/todos/:id
router.delete("/:id", todosCtrl.delete)

export {
  router
}
