import { useState, useEffect } from 'react';

// Custom hooks need to be named as starting with 'use'
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    // Async await method [used as a replacement for ]
    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    };

    // If this was not a custom hook, the dependecy array would've been empty byt the value of url can change now
    useEffect(() => {
        getProducts()
    }, [url]);

    return { loading, products }
};
