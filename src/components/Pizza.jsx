import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPizza(data);
  };

  return (
    <div className="card mx-2 my-5 ">
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="row  justify-content-center">
            <img src={pizza.img} className="imgPizza" />
          </div>
          <div className="row text-capitalize fw-semibold mt-3">
            Pizza: {pizza.name}
          </div>

          <div className="row mt-3">
            Precio: $ {Intl.NumberFormat().format(pizza.price)}
                  </div>
                  
                  <div className="row mt-3 text-capitalize">
                      Ingredientes: {pizza.ingredients.join(", ")}
                  </div>
                  <div className="row mt-3 text-start fs-6 fw-lighter">{pizza.desc}</div>
                  
                   <div class="mt-5">
            <button type="button" class="btn btn-outline-dark">
              Añadir a Carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
