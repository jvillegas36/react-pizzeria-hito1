import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from "../assets/pizzas.js";


const Home = () => {
  return (
    <>
      <Header />

      <main class="container">
        <section class="row">
          {pizzas.map(piz =>
           <article class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
            <CardPizza
              name={piz.name}
              price={piz.price}
              ingredients={piz.ingredients}
              img={piz.img}
            />
          </article>
          )
            
        }
        </section>
      </main>
    </>
  );
};

export default Home;
