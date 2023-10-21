require('dotenv').config()
const express = require('express')

const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 5000;

const data = {
    restaurants: [
        {
            name: 'Restaurant 1',
            address: 'Address 1',
            rating: 4.5,
            menu: [
                {
                    name: 'Menu 1',
                    price: 10
                },
                {
                    name: 'Menu 2',
                    price: 20
                }
            ]
        },
        {
            name: 'Restaurant 2',
            address: 'Address 2',
            rating: 4.0,
            menu: [
                {
                    name: 'Menu 1',
                    price: 10
                },
                {
                    name: 'Menu 2',
                    price: 20
                }
            ]
        },
        {
            name: 'Restaurant 3',
            address: 'Address 3',
            rating: 3.5,
            menu: [
                {
                    name: 'Menu 1',
                    price: 10
                },
                {
                    name: 'Menu 2',
                    price: 20
                }
            ]
        }
    ]
}

// Define middleware at the top so it catches everything
// if next is not used it's usually skipped
app.use(morgan('tiny'))

app.post('/api/v1/restaurants', (req, res) => {
    console.log('hello')
    // console.log(req)
})

app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json(data)
})

app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})