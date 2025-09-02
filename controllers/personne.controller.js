import * as yup from 'yup'
import { fr } from 'yup-locales'
import connection from '../config/db.js'

yup.setLocale(fr)


const personneSchema = yup.object().shape({
    nom: yup
        .string()
        .required()
        .matches(/^[A-Z]{1}.{2,19}$/, "Le nom doit commencer par une majuscule et comporter entre 3 et 20 lettres"),
    prenom: yup
        .string()
        .min(3, (args) => `Le prénom doit contenir au moins ${args.min} caractères, valeur saisie : ${args.value} `)
        .max(20),
    age: yup
        .number()
        .required()
        .positive()

})


// const personnes = [
//     { id: 1, nom: "Wick", prenom: "John", age: 45 },
//     { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
//     { id: 3, nom: "Maggio", prenom: "Sophie", age: 33 },
// ]

const showPersonnes = (req, res, next) => {
    const SELECT = "SELECT * FROM personnes"
    const query = connection.query(SELECT, (error, resultat) =>{
        console.log(query.sql);
        
        if(resultat) {
            res.render('personne', {
                personnes: resultat,
                erreurs: null
            })
        }
    })
   
}
const addPersonne = (req, res, next) => {
    //const nom = req.body.nom
    const INSERT = "INSERT INTO personnes VALUES()"
    const query = connection.query(INSERT, (error, resultat) =>{
        console.log(query.sql);
    })


    // personneSchema
    //     .validate(req.body, { abortEarly: false })
    //     .then(() => {
    //         personnes.push(req.body)
    //         req.session.firstname = req.body.prenom
    //         res.redirect('/personne')
    //     })
    //     .catch(err => {
    //         console.log(err);

    //         res.render('personne', {
    //             erreurs: err.errors,
    //             personnes
    //         })
    //     })
}
const deletePersonne = (req, res, next) => {
    const id = req.params.id
    const DELETE ="DELETE from personnes WHERE id:p.id"

     const query = connection.query(DELETE, (error, resultat) =>{
        console.log(query.sql);
     })
    }
//     const index = personnes.findIndex(p => p.id == id)
//     if (index != -1) {
//         personnes.splice(index, 1)
//     } else {
//         alert("Suppression impossible !")
//     }
//     res.redirect('/personne')

// }

export default { showPersonnes, addPersonne, deletePersonne }