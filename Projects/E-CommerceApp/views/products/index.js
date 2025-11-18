const layout = require('../layout')

module.exports = ({ products }) => {
    const renderedProducts = products.map(product => {
        return `
        <div class="col-md-3 mb-3">
                    <div class="card text-center">
                        <img src="data:image/png;base64, ${product.image}" class="img-fluid" alt="${product.title}">
                        <div class="card-body text-start">
                            <p class="card-text">${product.title}</p>
                            <p class="card-text">$${product.price}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#">
                                <i class="bi bi-cart3"></i>Add to cart
                            </a>
                        </div>
                    </div>
        </div>
        `
    }).join('');

    return layout({
        content: `
    <div class="row justify-content-start align-items-start my-3">
                <div class="col-sm-6">
                    <h2>Featured Items</h2>
                </div>
            </div>
            <div class="row">
             ${renderedProducts}
            </div>
    </div>
    `
    })
}