import React from "react";

const CardPizza = (props) => {
  return (
    <div class="card mx-2">
      <img src={props.img} class="card-img-top" alt="Pizza 1" />
      <div class="card-body">
        <h5 class="card-title fw-bold mb-3 text-start text-capitalize">Pizza {props.name}</h5>
        <hr />
        Ingredientes:
        <p class="card-text h6 fw-light mt-2">
          {/* 🍕{props.ingredients.join(", ")} */}
          <ul className="ulFormat">
            {props.ingredients.map(ing =>
              <li className="text-start text-capitalize" key={ing}>
              🍕 {ing}
              <hr className="hrFormat"/>
            </li>          
          )}
          </ul>
        </p>
        {/* <hr /> */}
        <p class="card-text h5 ">
          Precio: ${Intl.NumberFormat().format(props.price)}
        </p>
        <div class="row mt-4">
          <div class="col-6">
            <button type="button" class="btn btn-outline-dark">
              Ver Más 👀
            </button>
          </div>

          <div class="col-6">
            <button type="button" class="btn btn-dark">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
