const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    console.log('Có 1 request mới đi vào!');
    const responseJson = {
        message: 'Welcome warriors to Golden Owl!',
    }
    res.json(responseJson)
})

module.exports = router
