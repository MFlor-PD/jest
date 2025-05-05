const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');
beforeEach(() => {
    resetProducts();
});
afterEach(() => {
    resetProducts();
});
// El primer test que vamos a hacer es el de crear un producto. **addProduct**
//El siguiente test que vamos a hacer es el de eliminar un producto. Para ello, vamos a usar la función **removeProduct**. 
//Test obtener producto. getProduct
//Test actualizar producto. updateProduct
