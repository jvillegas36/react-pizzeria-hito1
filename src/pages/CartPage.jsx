import React, { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const CartPage = () => {
  const [carro, setCarro] = useState(pizzaCart);
  const editPizza = [...carro];

  const aumentarCompra = (piz) => {
    const index = editPizza.findIndex((el) => el.id === piz.id);

    carro[index].price = (piz.price / piz.count) * (piz.count + 1);
    carro[index].count = piz.count + 1;
    setCarro([...carro]);
  };

  const disminuirCompra = (piz) => {
    const index = editPizza.findIndex((el) => el.id === piz.id);
    if (editPizza[index].count - 1 == 0) {
      carro.splice(index, 1);
      setCarro([...carro]);
      return;
    } else {
      carro[index].price = (piz.price / piz.count) * (piz.count - 1);
      carro[index].count = piz.count - 1;
      setCarro([...carro]);
      return;
    }
  };

  const result = carro.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );

  return (
    <div className="my-3 card container ">
      <div className="d-flex justify-content-center">
        <div className="row col-6 ">
          <h3 className="text-start fw-bold">Detalle del pedido</h3>

          <ul className="ulFormat">
            {carro.map((piz) => (
              <li key={piz.id} className="my-3">
                <img className="imgLi col-2" src={piz.img} alt={piz.name} />
                <label className="col-3 text-start ms-2 text-capitalize fw-semibold">
                  {piz.name}
                </label>
                <label className="col-3 fw-semibold">
                  $ {Intl.NumberFormat().format(piz.price)}
                </label>

                <button
                  className="btn btn-outline-danger btnAncho"
                  onClick={() => disminuirCompra(piz)}
                >
                  -
                </button>
                <label className="col-1 fw-bold">{piz.count}</label>
                <button
                  className="btn btn-outline-primary btnAncho"
                  onClick={() => aumentarCompra(piz)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>

          <h2 className="text-start fw-bold">
            Total : $ {Intl.NumberFormat().format(result)}
          </h2>
          <button className="my-5 col-3 btn btn-primary fw-bold">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
