import "./Item_style.css";

const Item = (Props) => {
  return (
    <div>
      <div className="main">
        <div className="popular_in_women">
          <p className="mp0">POPULAR IN WOMEN</p>{" "}
          <hr className="myhr" />
        </div>
      </div>

      <div className="item">
        <img src={Props.image} alt="" />
        <p>{Props.name}</p>

        <div className="item_prices">
          <div className="new_price">{Props.new_price}</div>
          <div className="old_price">{Props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
