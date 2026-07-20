const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const responseJson = {
        message: 'Welcome warriors to Golden Owl!',
    }
    res.json(responseJson)
})
router.get('/ci-cd', (req, res) => {
    const responseJson = {
        message: 'CI/CD is working!',
    }
    res.json(responseJson)
})
router.get('/hello', (req, res) => {
    const responseJson = {
        message: 'Hello World!',
    }
    res.json(responseJson)
})


module.exports = router
