// resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct

let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error("El nombre y el precio del producto deben estar definidos.");
      };
      
      if (products.some(product => product.name === name)) {
        throw new Error(`El producto "${name}" ya existe.`);
      }
    id++;
    const newProduct = {
        id: id,
        name: name,
        price: price,
      };
    }
    products.push(newProduct);


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