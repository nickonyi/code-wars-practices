function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
    };
}

var products = [
    new Product(1, "Star Wars Lego Ship"),
    new Product(2, "Barbie Doll"),
    new Product(3, "Remote Control Airplane"),
];
var cart = new Cart();

(function() {
    function addToCart() {
        var productId = this.getAttribute("id");
        var product = products.find(function(x) {
            return x.getId() == productId;
        });
        cart.addItem(product);

        var newItem = document.createElement("li");
        newItem.innerHTML = product.getDescription();
        newItem.setAttribute("id-cart", product.getId());
        document.getElementById("cart").appendChild(newItem);
    }

    products.forEach(function(product) {
        var newItem = document.createElement("li");
        newItem.innerHTML = product.getDescription();
        newItem.setAttribute("id", product.getId());
        newItem.addEventListener("dblclick", addToCart);
        document.getElementById("products").appendChild(newItem);
    });
})();