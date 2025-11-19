const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ product, errors }) => {
    return layout({
        content:
            `
        <h2 class="mb-3">Edit Product</h2>
        <form method="POST" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" name="title" id="title" class="form-control" placeholder="Title" value="${product.title}">
                <div id="titleHelp" class="form-text">${getError(errors, 'title')}</div>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" name="price" id="price" class="form-control" placeholder="Price" value="${product.price}">
                <div id="priceHelp" class="form-text">${getError(errors, 'price')}</div>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="file" name="image" id="image" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Save</button>
        </form>
        `
    })
}