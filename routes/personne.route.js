import express from 'express'
// ici, on gère les routes relatives  aux personnes
const router = express.Router()

router.get('/', (req, res) => {
    console.log("personne");
    res.end("personne");
    
})
router.post('/', (req, res) => {

})

export default router
