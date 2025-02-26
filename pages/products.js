import { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const products = await response.json();
            setProducts(products);
        } catch (error) {
            console.error('Gagal mengambil data produk:', error);
        }
    };

        fetchProducts();
    }, []);

    return (
        <div>
        <h1>Daftar Produk</h1>
        <ul>
            {products.map((product) => (
            <li key={product.id}>{product.title}</li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;
