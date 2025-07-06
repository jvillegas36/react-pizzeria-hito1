import React from "react";
import { Link } from "react-router-dom";

const CardPizza = (props) => {


  return (
    <div className="card mx-2" key={props.id} >
      <img src={props.img} className="card-img-top" alt="Pizza 1" />
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 text-start text-capitalize">Pizza {props.name}</h5>
        <hr />
        Ingredientes:
        <div className="card-text h6 fw-light mt-2">
          {/* 🍕{props.ingredients.join(", ")} */}
          <ul className="ulFormat">
            {props.ingredients.map(ing =>
              <li className="text-start text-capitalize" key={ing}>
              🍕 {ing}
              <hr className="hrFormat"/>
            </li>          
          )}
          </ul>
        </div>
        {/* <hr /> */}
        <p className="card-text h5 ">
          Precio: ${Intl.NumberFormat().format(props.price)}
        </p>
        <div className="row mt-4">
          <div className="col-6">
            <Link type="button" className="btn btn-outline-dark" to="pizza">
              Ver Más 👀
            </Link>
          </div>

          <div className="col-6">
            <button type="button" className="btn btn-dark"
               onClick={props.pizzaAdd}
              >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
