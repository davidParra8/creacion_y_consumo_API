import { getConnection } from "./../common/conection";

async function readProducts(res) {
    const conection = await getConnection();
    const resultado = await conection.query("SELECT * FROM products");
    return res.json(resultado);
};

async function readProduct(body, res) {
    const conection = await getConnection();
    const resultado = await conection.query("SELECT * FROM products WHERE sku = ?", body.sku);
    if (resultado === undefined) {
        return res.status(400).json({"message":"Bad Request. SKU: " + body.sku + " no existe"});
    }
    return res.json(resultado);
};

async function createProduct(sku, name_product, price, description_product, url_image, res) {
    if (sku === undefined || name_product === undefined || price === undefined || description_product === undefined || url_image === undefined) {
        res.status(400).json({"message":"Bad Request. Please fill all fields."});
    }
    else{
        const conection = await getConnection();
        const resultado = await conection.query("INSERT INTO products (sku, name_product, price, description_product, url_image) VALUES(?,?,?,?,?)", [sku, name_product, price, description_product, url_image]);    
        return res.json(resultado);
    }
};

async function updateProduct(sku, name_product, price, description_product, url_image, res) {
    if (sku === undefined || name_product === undefined || price === undefined || description_product === undefined || url_image === undefined) {
        res.status(400).json({"message":"Bad Request. Please fill all fields."});
    }
    else{
        const conection = await getConnection();
        const resultado = await conection.query("UPDATE products SET name_product = ?, price = ?, description_product = ?, url_image = ? WHERE sku = ?", [name_product, price, description_product, url_image, sku]);    
        return res.json(resultado);
    }
};

async function deleteProduct(body, res) {
    const conection = await getConnection();
    const resultado = await conection.query("DELETE FROM products WHERE sku = ?", body.sku);
    if (resultado === undefined) {
        return res.status(400).json({"message":"Bad Request. SKU: " + body.sku + " no existe"});
    }
    return res.json(resultado);
};

export const methods = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct
};