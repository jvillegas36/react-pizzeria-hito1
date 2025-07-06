import { createContext, useCallback, useEffect, useState } from "react";

export const ConxPizzasContext = createContext();

const ConxPizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPizzaId, setSelectedPizzaId] = useState(null);

  const fetchPizzas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchById = useCallback(async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) throw new Error("Error al buscar pizza");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }, []);

  useEffect(() => {
    fetchPizzas();
  }, [fetchPizzas]);

  const selectPizza = (id) => {
    setSelectedPizzaId(id);
  };

  return (
    <ConxPizzasContext.Provider
      value={{
        pizzas,
        loading,
        error,
        refresh: fetchPizzas,
        fetchById,
        selectedPizzaId,
        selectPizza,
      }}
    >
      {children}
    </ConxPizzasContext.Provider>
  );
};

export default ConxPizzasProvider;
