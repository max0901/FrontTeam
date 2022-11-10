import React, { useCallback, useState } from "react";

export const useInput = (initalValue = null) => {
  const [value, setValue] = useState(initalValue);

  const handler = (e) => {
    setValue(e.target.value);
    e.target.style.width = e.target.value.length * 100 + "px";
  };
  return [value, handler, setValue];
};
