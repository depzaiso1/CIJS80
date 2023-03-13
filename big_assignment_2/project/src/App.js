import { useState } from "react";
import { MealList } from "./Component/mealList";
import { Modal } from "./Component/modal";
import "./App.css";
import { CartContextProvider } from "./Component/cartContext";
import { MealContextProvider } from "./Component/mealContext";
import { Header } from "./Component/header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContextProvider>
      <MealContextProvider>
        <div className="container">
          <Header setIsOpen={setIsOpen} />
          <MealList />
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
      </MealContextProvider>
    </CartContextProvider>
  );
}
export default App;
