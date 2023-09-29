import {pool} from './database.js'
import '../config/dotenv.js'
import overwatchData from '../data/overwatch.js'
const seedCharacterTable = async() => {
    overwatchData.forEach( character => {
        const insertQuery = {
            text: 'INSERT INTO characters (name, role, hp, primary_weapon, ability_one, ability_two, ultimate) VALUES ($1, $2, $3, $4, $5, $6, $7)'
          }
          const values = [
            character.name,
            character.role,
            character.hp,
            character.primary_weapon,
            character.ability_one,
            character.ability_two,
            character.ultimate
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }
        
            console.log(`✅ ${character.name} added successfully`)
        })
    })
}
seedCharacterTable()