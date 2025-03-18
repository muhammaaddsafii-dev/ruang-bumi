import React, { useState } from "react";

const InputCounter: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="input-counter">
      <span className="minus-btn" onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </span>
      <input type="text" value={count} readOnly />
      <span className="plus-btn" onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
};

export default InputCounter;
