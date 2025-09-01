const showPersonnes = (req, res, next) => {
    res.render('personne', { name: req.query.name })
}

export default { showPersonnes }