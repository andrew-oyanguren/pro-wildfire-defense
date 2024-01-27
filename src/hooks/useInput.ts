import { useState, ChangeEvent } from 'react';

const useInput = (
  initValue: string = '',
  validation?: (value: string) => boolean
) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onFocus = () => {
    if (isTouched && hasError) setHasError(false);
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    if (validation) {
      console.log('running validation block');

      const isValid = validation(value);
      if (isValid === false) setHasError(true);
    }

    setIsTouched(true);
  };

  return {
    onBlur,
    onFocus,
    onChange,
    value,
    isTouched,
    hasError,
  };
};

export default useInput;
