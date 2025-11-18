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
                        <form action="/cart/products" method="POST">
                            <input type="hidden" name="productId" value="${product.id}">
                            <button type="submit" class="btn btn-link">
                                <i class="bi bi-cart3"></i>Add to cart
                            </button>
                        </form>
                        </div>
                    </div>
        </div>
        `
    }).join('');

    return layout({
        content: `
    <section>
            <div class="row justify-content-center align-items-center mt-4">
                <div class="col-sm-12 banner w-100">
                    <img src="/assets/banner.jpg" alt="Limited Time Offer - Order Today for $99" class="img-fluid w-100">
                </div>
            </div>
    </section>
    <section>
        <div class="row justify-content-start align-items-start my-3">
            <div class="col-sm-6">
                <h2>Featured Items</h2>
            </div>
            <div class="row">
                ${renderedProducts}
            </div>
        </div>
    </section>
    `
    })
}