import React, { useCallback, useState } from "react";

export const useInput = (initalValue = null) => {
  const [value, setValue] = useState(initalValue);

  const handler = (e) => {
    setValue(e.target.value);
  };
  return [value, handler, setValue];
};
