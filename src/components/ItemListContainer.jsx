import "./styles/itemListContainer.css"

export function ItemListContainer(greeting){
    return(
        
            <div className="container">
                <h1 className="bienvenida">{greeting.title}</h1>
            </div>
        
    )
}