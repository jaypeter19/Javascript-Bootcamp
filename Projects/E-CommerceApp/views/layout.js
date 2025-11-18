module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce App</title>
    <!-- Bootstrap Library -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <!-- Bootstrap Icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <!-- Styles CSS -->
    <link rel="stylesheet" href="/css/main.css">
</head>

<body>
    <nav class="navbar">
    <div class="container">
        <div class="row justify-content-between align-items-center w-100 py-3">
            <div class="col-sm-6 text-start">
                <ul class="social">
                    <li>
                        <a href=""><i class="bi bi-telephone-fill"></i>+1 555 987 6543</a>
                    </li>
                    <li>
                        <a href=""><i class="bi bi-envelope-fill"></i>shop@myshop.com</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-6 text-end">
                <ul class="social">
                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i class="bi bi-dribbble"></i></a></li>
                    <li><a href="#"><i class="bi bi-google"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    </nav>
    <div class="container">
        <div class="row justify-content-between align-items-center my-3">
            <div class="col-sm-6">
                <h1>E-Commerce Shop</h1>
            </div>
            <div class="col-sm-6 text-end">
                <a href="/admin/products" class="btn btn-primary"><i class="bi bi-star-fill"></i>Products</a>
                <a href="#" class="btn btn-primary"><i class="bi bi-cart3"></i>Cart</a>
            </div>
        </div>
        <section>
            <div class="row justify-content-center align-items-center mt-4">
                <div class="col-sm-12 banner w-100">
                    <img src="/assets/banner.jpg" alt="Limited Time Offer - Order Today for $99" class="img-fluid w-100">
                </div>
            </div>
        </section>
        <section>
        ${content}
        </section>
    </div>
    <!-- JS Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</body>

</html>
    `
}