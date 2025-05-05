// resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct

const products = 
{'name': 'Product1', 'price': 100, 'id': 1};


function resetProducts() {
    products = [];
};

function addProduct(product) {
    if (!product || !product.name || !product.price) {
        throw new Error('Invalid product');
    }
    products.push(product);
}

function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }
    products.splice(index, 1);
}   

function getProducts() {
    return products;
}   

function getProduct(productId) {            
    const product = products.find(p => p.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}       

function updateProduct(productId, updatedProduct) {     
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }
    products[index] = { ...products[index], ...updatedProduct };
}   

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};  