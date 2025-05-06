const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
  it('should add a product', () => {
    addProduct('product1', 10);
    const products = getProducts();
    //console.log(products);
    expect(products).toHaveLength(1);
    expect(products[0]).toMatchObject({ name: 'product1', price: 10 });
  });
  it('should increment the ID by 1, everytime a product is added', () => {
    addProduct('product1', 10);
    addProduct('product2', 20);
    const products = getProducts();
    expect(products[0].id).toBe(1);
    expect(products[1].id).toBe(2);
  });
  it('should throw an error if the name or price is not defined', () => {
    expect(() => addProduct()).toThrow('El nombre y el precio del producto deben estar definidos.');
    expect(() => addProduct('product1')).toThrow('El nombre y el precio del producto deben estar definidos.');
    expect(() => addProduct(undefined, 10)).toThrow('El nombre y el precio del producto deben estar definidos.');
  });
  it('should throw an error if the product already exists', () => {
    addProduct('product1', 10);
    expect(() => addProduct('product1', 20)).toThrow('El producto "product1" ya existe.');
  });
});

describe('removeProduct', () => {
  it('should remove a product', () => {
    addProduct('product1', 10);
    addProduct('product2', 20);
    removeProduct(1);
    const products = getProducts();
    expect(products).toHaveLength(1);
    expect(products[0]).toMatchObject({ name: 'product2', price: 20 });
  });
  it('should throw an error if the product does not exist', () => {
    expect(() => removeProduct(1)).toThrow('Product not found');
  });
}
);

describe('getProduct', () => {
  it('should return a product by its id', () => {
    addProduct('product1', 10);
    addProduct('product2', 20);
    const product = getProduct(2);
    //console.log(product);
    expect(product).toMatchObject({ id: 2, name: 'product2', price: 20 });
  });
  it('should throw an error if the product does not exist', () => {
    expect(() => getProduct(1)).toThrow('Product not found');
  });
});


describe(updateProduct, () => {
  it('should update a product by its id', () => {
    addProduct('product1', 10);
    addProduct('product2', 20);
    updateProduct(2, { name: 'updatedProduct2', price: 30 });
    const product = getProduct(2);
    expect(product).toMatchObject({ id: 2, name: 'updatedProduct2', price: 30 });
  });
  it('should throw an error if the product does not exist', () => {
    expect(() => updateProduct(1, { name: 'updatedProduct1' })).toThrow('Product not found');
  });
});
