import express from 'express'
import PersonneController from '../controllers/personne.controller.js'
// ici, on gère les routes relatives  aux personnes
const router = express.Router()

router.get('/', PersonneController.showPersonnes)
router.post('/', (req, res) => {

})

export default router
