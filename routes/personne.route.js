import express from 'express'
import PersonneController from '../controllers/personne.controller.js'
// ici, on gère les routes relatives  aux personnes
const router = express.Router()

// Mapping entre route et contrôleur

router.get('/', PersonneController.show)
router.post('/', PersonneController.add)
router.get('/:id', PersonneController.remove)

export default router

