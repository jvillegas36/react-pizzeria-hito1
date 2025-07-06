import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";

const HomePage = () => {
  const { addToCart } = useContext(CartContext)
  
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    consultaApi()
  }, [])
  
  const consultaApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setPizzas(data);
  }

  return (
    <>
      <Header />     
      <main className="container">
        <section className="row" >
          {pizzas.map(piz =>
           <article key={piz.id}  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4"  >
            <CardPizza
                name={piz.name}
                price={piz.price}
                ingredients={piz.ingredients}
                img={piz.img}
                pizzaAdd={()=> addToCart(piz)}
            />
          </article>
          )
            
        }
        </section>
      </main>
    </>
  );
};

export default HomePage;
