function App() {

    const products = [
        { 
            name: "Laptop", 
            price: 1200, 
            category: "electronics",
            inStock: true
        },
        { 
            name: "Mouse", 
            price: 30, 
            category: "electronics",
            inStock: true
        },
        { 
            name: "Keyboard", 
            price: 80, 
            category: "electronics",
            inStock: false
        },
        { 
            name: "Desk", 
            price: 250, 
            category: "furniture",
            inStock: true
        },
        { 
            name: "Chair", 
            price: 150, 
            category: "furniture",
            inStock: false
        }
    ];

    const productNames = products.map(product => product.name);

    const expensiveProducts = products.filter(product => product.price > 100);

    const electronicsProducts = products.filter(
        product => product.category === "electronics"
    );

    const desk = products.find(product => product.name === "Desk");

    const cheapProduct = products.find(product => product.price < 100);

    return (
        <div>
            <h1>Product store</h1>

            <h2>1. Kõikide toodete nimed</h2>
            <p>{productNames.join(", ")}</p>

            <h2>2. Tooted hinnaga üle 100 €</h2>
            {expensiveProducts.map(product => (
                <p key={product.name}>
                    {product.name} - {product.price} €
                </p>
            ))}

            <h2>3. Electronics kategooria</h2>
            {electronicsProducts.map(product => (
                <p key={product.name}>
                    {product.name} - {product.price} €
                </p>
            ))}

            <h2>4. Desk</h2>
            <p>
                {desk.name} - {desk.price} €
            </p>

            <h2>5. Esimene toode alla 100 €</h2>
            <p>
                {cheapProduct.name} - {cheapProduct.price} €
            </p>

        </div>
    );
}

export default App;