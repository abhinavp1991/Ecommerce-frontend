export const addItemToCart = (item,next) => {
    let cart = []
    if (typeof window != undefined){
        if (localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item
        })
        localStorage.setItem("cart",JSON.stringify(cart));
        next();
    }
}

export const loadCart = () => {
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
}

export const removeItemFromCart = (productId) => {
    let cart = []
    console.log("hello");
    if(typeof window !== undefined){
        console.log("hello1");
        if(localStorage.getItem("cart")){
            console.log("hello");
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        console.log("hello2");
        cart.map((product, i) => {
            if(product._id === productId){
                cart.splice(i,1)
            }
        })
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    return cart;
}

export const cartEmpty  = (next) => {
    if(typeof window !== undefined){
        localStorage.removeItem("cart");
        let cart = [];
        localStorage.setItem("cart",JSON.stringify(cart));
        next();
    }
}