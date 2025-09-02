const personnes = [
    {id:1, name: "Wick", surname: "John", age: 45},
    {id:2, name: "Dalton", surname: "Jack", age: 55},
    {id:3, name: "Maggio", surname: "Sophie", age:33},
]
const showPersonnes = (req, res, next) => {
    
    res.render('personne',{
        personnes
    })
    
    
   //
    //res.send('personne',`personnes`)
}
const addPersonne = (req, res, next) => {
    personnes.push(req.body)
    req.session.firstname = req.body.surname

    res.redirect('/personne')
    
}

const deletePersonne = (req,res, next) =>{
const id = req.params.id
const index = personnes.findIndex(p=> p.id ==id)
   if (index != -1) {
    personnes.splice(index, 1)
    } else {
        alert()
    }

    res.redirect('/personne')

}
export default { showPersonnes, addPersonne, deletePersonne}