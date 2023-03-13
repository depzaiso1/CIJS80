import { createContext, useState } from "react";

export const MealContext = createContext();

export function MealContextProvider(props) {
  const [meals, setMeals] = useState([]);

  return (
    <MealContext.Provider value={{ meals, setMeals }}>
      {props.children}
    </MealContext.Provider>
  );
}
