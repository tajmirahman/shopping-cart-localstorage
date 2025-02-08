const addProduct = () => {
    const productField = document.getElementById('input-text');
    const quantityField = document.getElementById('input-number');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value= '';
    quantityField.value= '';

    displayQuantity(product, quantity);
    saveProductToLocalStorage(product,quantity);
}

const displayQuantity = (product, quantity) => {
    const productContainer = document.getElementById('cart-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productContainer.appendChild(li);

}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    return cart;
}

const saveProductToLocalStorage=(product,quantity)=>{

    const cart= getStoredShoppingCart();
    cart[product]= quantity;
    const setStringify=JSON.stringify(cart);
    localStorage.setItem('cart',setStringify);

}

const saveProdutFormLocalStorage=()=>{
    const saveProduct= getStoredShoppingCart();
    for(const product in saveProduct){
        const quantity=saveProduct[product]
        displayQuantity(product,quantity);
    }
}

saveProdutFormLocalStorage();