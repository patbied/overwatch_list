import express from 'express'
import path from 'path' 
import { fileURLToPath } from 'url'
import overwatchData from '../data/overwatch.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json(overwatchData)
})


router.get('/:characterId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/character.html'))
})



export default router