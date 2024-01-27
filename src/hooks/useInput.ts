import { useState, ChangeEvent, useEffect } from 'react';

const useInput = (
  initValue: string = '',
  validation?: (value: string) => boolean
) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log('[INPUT] hasError: ', hasError);
  }, [hasError]);

  const onFocus = () => {
    console.log('[INPUT] onFocus...');
    if (isTouched && hasError) setHasError(false);

    setIsTouched(true);
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log('[INPUT] onChange...');
    setValue(event.target.value);
  };

  const onBlur = () => {
    console.log('[INPUT] onBlur...');

    if (validation) {
      console.log('running validation block');

      const isValid = validation(value);
      if (isValid === false) setHasError(true);
    }
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
