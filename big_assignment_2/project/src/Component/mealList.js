import { useState, useEffect, useContext } from "react";
import { MealContext } from "./mealContext";
import { Meal } from "./meal";

function MealList() {
  const { meals, setMeals } = useContext(MealContext);
  const [isLoading, setIsLoading] = useState(false);

  const refinedData = (arr) => {
    arr.forEach((item, i) => {
      item.id = i + 1;
    });
  };

  const handleFetchMealList = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
      );
      const data = await response.json();
      console.log(data);
      refinedData(data);
      setMeals(data);
    } catch (err) {
      alert("error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchMealList();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <div>
          {meals.map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export { MealList };
