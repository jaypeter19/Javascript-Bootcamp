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
    <div class="container">
        <div class="row justify-content- align-items-center my-3">
            <div class="col-sm-6">
                <h1>Admin Panel</h1>
            </div>
            <div class="col-sm-6 text-end">
                <a href="/admin/products" class="btn btn-primary"><i class="bi bi-star-fill"></i>Products</a>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-sm-4">
                ${content}
            </div>
        </div>
    </div>
    <!-- JS Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
    <script src="/js/app.js"></script>
</body>

</html>
`
}