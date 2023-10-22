require('dotenv').config()
const express = require('express')

const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 5000
const db = require('./db')

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

// gives us ability to access the json
app.use(express.json())
// Define middleware at the top so it catches everything
// if next is not used it's usually skipped
app.use(morgan('tiny'))

// create
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body)
    // console.log(req)
    res.status(201).json({
        status: 'success',
        data: {
            restaurant: 'McDonalds'
        }
    })
})

// read all
app.get('/api/v1/restaurants', async (req, res) => {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json(data)
})

// read one
app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).json(data.restaurants[0])
})

// update
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: 'bonjour'
        }
    })
})

// delete
app.delete('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
    res.status(204).json({
        status: 'success'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})