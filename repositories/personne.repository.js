import connection from '../config/db.config.js'


//export const findAll = async () =>{
 const findAll = async () =>{
    const SELECT = "SELECT * FROM personnes"
    try {
        const resultat = await ( connection.query(SELECT))
        return resultat[0]
        // res.render('personne', {
        //     personnes: resultat[0],
        //     erreurs: null
        // })

    } catch (error) {
        res.render('personne', {
            personnes: [],
            erreurs: "Problème de récupération de données"
        })

    }
}

const save = async (personne) => {
    const INSERT = "INSERT INTO personnes values (null, ?, ?, ?)"
    try {
        const resultat = await connection.query(INSERT, [personne.nom, personne.prenom, personne.age])
        personne.id = resultat[0].insertId
        return personne
    } catch (error) {
        console.log(error);
        return null
    }
}
 const deleteById = async (id) => {
   const DELETE = "DELETE FROM personnes WHERE id=?"
    try {
        await connection.query(DELETE, id);
    } catch (error) {
        console.log(error);
    }
}
const update = async (personne) => {
    const UPDATE = "UPDATE personnes SET nom=?, prenom=?,age=? WHERE id=?"
    try {
        const resultat = await connection.query(UPDATE, [personne.nom, personne.prenom, personne.age, personne.id])
        if (resultat[0].affectedRows > 0) {
            return personne
        }
    } catch (error) {
        console.log(error);
    }
    return null
}
const findById = async (id) =>{
    const SELECT = "SELECT * FROM personnes WHERE id =?"
    try{
        const resultat =await connection.query(SELECT,id);
        return resultat[0][0]
       
    }catch(error){
        return null
    }
}

//findById(2).then(console.log());


export default { findAll, save, deleteById, findById, update}