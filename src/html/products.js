var products = [];
$('#products').on('click', '.add-to-cart', (function () {
    var product_id = $(this).siblings('h3').children('a').text();
    var product_price = $(this).siblings('span').text().slice(8);
    if (products.length == 0) {
        products.push({
            id: product_id,
            price: product_price,
            quantity: 1
        });
        add_to_cart();
    }
    else if (present(product_id)) {
        add_to_cart();
    }
    else {
        products.push({
            id: product_id,
            price: product_price,
            quantity: 1
        });
        add_to_cart();
    }
}));
var total_price = 0;
//adding item to card and display on page
function add_to_cart() {
    var total_Shopping = 0;
    var table = `<table><tr><th>Product Name</th><th>Price</th></tr>`;
    for (let i = 0; i < products.length; i++) {
        console.log(total_Shopping);
        total_price = parseInt(products[i].quantity) * parseInt(products[i].price);
        console.log(total_Shopping);
        table += ` <tr><td>` + products[i].id + `</td>
        <td>` + products[i].price + `</td>
        <td><input data-value="`+ i + `" type="number" min="1" max="1000" value=` + products[i].quantity + `></td>
        <td class=".price">Total Price ` + total_price + `</td>
        <td><input data-can="`+ products[i].id + `" type=button value="Remove from Cart"></td>`;
        total_Shopping = total_Shopping + total_price;
    } console.log("before" + total_Shopping);

    console.log(total_Shopping);
    table += `</table>`;
    $('#cart').html(table);
    $('#cart').append(`<p>Grand Total- ` + total_Shopping + `</p>`);
}
$("#cart").on("change", "input[type='number']", function () {
    var update_item = $(this).data("value");
    var update_quantity = $(this).val();
    products[update_item].quantity = update_quantity;
    console.log(update_item);
    console.log(update_quantity);
    add_to_cart();
});
$("#cart").on("click", "input[type='button']", function () {
    var remove_item = $(this).data("can");
    console.log(remove_item);
    products.splice($.inArray(remove_item, products), 1);
    add_to_cart();
});
function present(product_id) {
    for (let i = 0; i < products.length; i++) {
        if (product_id == products[i].id) {
            products[i].quantity += 1;
            return true;
        }
    }
    return false;
}
