import React, { useRef } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartInputRef = useRef();

  const handleCartFormSubmit = (e) => {
    e.preventDefault();

    const cartAmount = cartInputRef.current.value;
    const cartAmountNumber = +cartAmount;
    props.onUpdateCart(cartAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={handleCartFormSubmit}>
      <Input
        ref={cartInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};

export default MealItemForm;
