import { pool } from "../config/database.js";

const getCharacters = async(req,res) => {
    try {
        console.log("here")
        const results = await pool.query("SELECT * FROM characters")
        
        res.status(200).json(results.rows)
    } catch(err) {
        console.log(err)
        res.status(409).json({error: err.message})
    }
}

export default {getCharacters}