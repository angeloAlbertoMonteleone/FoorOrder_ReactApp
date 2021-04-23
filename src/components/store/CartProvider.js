import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCart = item => {};

    const removeItemFromCart = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return <CartContext>
        {props.children}
    </CartContext>
};

export default CartProvider;