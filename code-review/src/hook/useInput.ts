import React, { useCallback, useState } from 'react';

const useInput = (input: string) => {
  const [value, setValue] = useState(input);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [value]
  );
  return { value, onChange };
};

export default useInput;
