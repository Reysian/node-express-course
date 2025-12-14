// Set up a server using express
const express = require('express');
const app = express();
const { products } = require('./data');

// Use our static resources (stored in public directory)
app.use(express.static('./public'))

// This callback function will run whenever the user performs a GET request on the home page (i.e. every hit).
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

// This callback function will run whenever the user performs a GET request on the products query page
app.get('/api/v1/products/query', (req, res) => {
    const { search, limit, over, under } = req.query;
    let filteredProducts = [...products];

    // If search query is used, then only include products whose names start with the search term.
    if (search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    // If limit query is used, then only include as many products as the limit allows
    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }

    // If over query is used, then only include products whose prices are more than the given number
    if (over) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.price > Number(over);
        });
    }

    // If under query is used, then only include products whose prices are less than the given number
    if (under) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.price < Number(under);
        });
    }

    res.status(200).json(filteredProducts);
});

// This callback function will run whenever the user performs a GET request on the products page with a productID included
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found."});
    }
    res.json(product);
});

// This callback function will run whenever the user performs a GET request on the products page alone
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

// This callback function will run whenever the user performs any request on an unknown path
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
})

// This callback function will run when our server starts.
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});