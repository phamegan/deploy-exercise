import menuDessertsRouter from './menus_desserts.js'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send("this is the menu")
})

router.use('/desserts', menuDessertsRouter)

export default router;

