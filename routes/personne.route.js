import express from 'express'
import PersonneController from '../controllers/personne.controller.js'
// ici, on gère les routes relatives  aux personnes
const router = express.Router()

router.get('/', PersonneController.showPersonnes)
//router.get('/', PersonneController.personnes)
router.post('/',PersonneController.addPersonne )
router.get('/:id',PersonneController.deletePersonne)
export default router
