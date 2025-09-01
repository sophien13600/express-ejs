import express from 'express'
import 'dotenv/config'
import personne from './routes/personne.route.js'
import adresse from './routes/adresse.route.js'

const app = express()
// Mapping entre routes et le routeur
app.use("/personne", personne)
app.use("/adresse", adresse)


app.get(['/', '/home', '/accueil'], (req, res) => {
    res.end("Hello world!")
})




app.all("/*splat", (req, res) => {
    res
        .status(404)
        .end("Page introuvable")
})


const PORT = process.env.PORT || 5555

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);
})