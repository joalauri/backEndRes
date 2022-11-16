/* Importing the `randomUUID` function from the `crypto` module. */
const { randomUUID } = require("crypto");
const { test } = require('../class.creation');



const contenedor = async () => {
    const nuevoContenedor = await test();
    return nuevoContenedor;
};

const apiController = {};

const isFound = (result, id, res) => {
    if (!result) {
      res.status(404);
      res.json({ mensaje: `no se encontró ${id}` });
    } else {
      res.json(result);
    }
  };
//It gets a product by id from the database and returns it to the user.

apiController.getProductByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await (await contenedor()).getById(id);
    isFound(result, id, res);
};

/**
 * It takes a request, and a response, and it creates a new product, and then it returns the product.
 */
apiController.addNewProduct = async (req, res) => {
    const object = {
        ...req.body,
        id: randomUUID(),
    };

    if (!object?.title || !object?.price || !object?.thumbnail) {
        res.status(404);
        res.json({ mensaje: `invalid format` });
    } else {
        await (await contenedor()).save(object);
        res.status(201);
        // res.send(
        //     JSON.stringify(await (await contenedor()).getById(object.id), null, 2)
        // );
        // console.log(object)
        res.redirect('/')
    }
};


//It deletes a product by id.
apiController.deleteProductById = async (req, res) => {
    const { id } = req.params;
    const result = await (await contenedor()).getById(id);
    if (!result) {
        res.status(404);
        res.json({ mensaje: `this id = ${id} doesn't exist` });
    } else {
        await (await contenedor()).deleteById(id);
        res.status(204);
        // console.log(id)
        res.render('index')
    }
};

/**
 * It updates a product by id, if the product exists, if the product doesn't exist it returns a 404, if
 * the product exists but the object is not valid it returns a 400, if the product exists and the
* object is valid it updates the product and returns a 204.
 */
apiController.updateProductById = async (req, res) => {
    const { id } = req.params;
    const object = req.body;
    const result = await (await contenedor()).getById(id);
    if (!result) {
        res.status(404);
        res.json({ mensaje: `this id = ${id} doesn't exist` });
    } else {
        if (!object?.title || !object?.price || !object?.thumbnail) {
            res.status(400);
            res.json({ mensaje: `invalid format` });
        } else {
            await (await contenedor()).updateById(object);
            res.status(204);
            res.send();
        }
    }
};



module.exports = apiController

