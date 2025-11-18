const layout = require('../layout')

module.exports = ({ products }) => {

    const renderedProducts = products.map((product) => {
        return `
        <tr>
        <th scope="row">${product.title}</th>
        <td>${product.price}</td>
        <td>
            <a href="/admin/products/${product.id}/edit" class="btn btn-primary">
                Edit
            </a>
        </td>
        <td>
        <form method="POST" action="/admin/products/${product.id}/delete">
            <button class="btn btn-danger">
                Delete
            </button>
        </form>
        </td>
        </tr>
        `
    }).join('');

    return layout({
        content:
            `
        <h2 class="mb-3">Products</h2v>
        <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            ${renderedProducts}
                        </tbody>
                    </table>
        </div>
    `
    });
}