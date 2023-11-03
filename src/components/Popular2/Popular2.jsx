import "./Popular2_style.css"
import new_collections from "../Assets/new_collections"
import Offer from "../Offer/Offer"

// Parent2 of Offer Component 

const Popular2 = () => {
    return (
            <div className="popular2">
                <h1>POPULAR IN EVERYONE</h1>
                <hr />
                <div className="popular2_item">
                    {new_collections.map((myvalue) => {
                        return (
                            <Offer
                                key={myvalue.id}
                                id={myvalue.id}
                                name={myvalue.name}
                                image={myvalue.image}
                                new_price={myvalue.new_price}
                                old_price={myvalue.old_price}
                            />
                        );
                    })}
                </div>
            </div>
    )
}

export default Popular2