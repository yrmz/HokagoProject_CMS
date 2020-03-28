import React, { useState } from "react";

export type UseInputType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (initialValue: string): UseInputType => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue((e.target as HTMLInputElement).value);
  return { value, onChange: handleOnChange };
};
