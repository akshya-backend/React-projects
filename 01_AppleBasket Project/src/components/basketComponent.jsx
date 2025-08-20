import "../App.css";

export default function BasketComponent({ leftBasket }) {
  return (
    <div className="basket">
      <img
        className="basketImg"
        src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-basket-clipart-flat-vector-illustration-of-wicker-basket-with-a-red-png-image_6798879.png"
        alt="Basket 1"
      />
      <div style={{ textAlign: "center" }}>{leftBasket}{leftBasket == 10 ? "(full)": ""} {leftBasket == 0 && "(empty)"}</div>
    </div>
  );
}
