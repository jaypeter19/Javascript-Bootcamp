const layout = require('../layout');

module.exports = ({ items }) => {
    const renderedItems = items.map((item) => {
        return `
        <div class="col-sm-12 bg-light p-3 mb-3">
                <div class="row justify-content-between align-items-center">
                    <div class="col-sm-8">
                        <h4>${item.product.title}</h4>
                    </div>
                    <div class="col-sm-4 text-end">
                        <p class="muted d-inline">$${item.product.price} X ${item.quantity} = <span>$39</span></p>
                        <form method="POST" class="d-inline">
                            <button class="btn btn-danger">
                                <i class="bi bi-x-square-fill"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return layout({
        content: `
        <div class="col-sm-6 cart">
            <h3>Shopping Cart</h3>
        </div>
        <div class="row mb-3">
        ${renderedItems}
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h5 class="card-header">Total</h5>
                    <div class="card-body">
                        <p class="card-text">$</p>
                        <button class="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
};