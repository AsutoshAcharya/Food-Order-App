import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [visible, setVisible] = useState(false);

  const showCartHandler = () => {
    setVisible(true);
  };
  const hideCartHandler = () => {
    setVisible(false);
  };
  return (
    <>
      {visible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
