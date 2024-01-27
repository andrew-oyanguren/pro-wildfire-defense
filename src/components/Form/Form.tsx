import { useInput } from '../../hooks';
import {
  ErrorMessage,
  FormControl,
  StyledForm,
  SubmitButton,
} from './Form.styled';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function Form() {
  const {
    onFocus: onFocusName,
    onChange: onChangeName,
    onBlur: onBlurName,
    value: name,
    isTouched: nameIsTouched,
    hasError: nameHasError,
  } = useInput('', (value) => {
    console.log('validating...');
    return !!value.length;
  });

  const {
    onFocus: onFocusEmail,
    onChange: onChangeEmail,
    onBlur: onBlurEmail,
    value: email,
    isTouched: emailIsTouched,
    hasError: emailHasError,
  } = useInput('', (value) => emailRegex.test(value));

  const {
    onFocus: onFocusMessage,
    onChange: onChangeMessage,
    onBlur: onBlurMessage,
    value: message,
    isTouched: messageIsTouched,
    hasError: messageHasError,
  } = useInput('', (value) => !!value.length);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      message,
    };

    console.log('payload: ', payload);
    console.log('form submitted');
  };

  const inputsTouched = nameIsTouched && emailIsTouched && messageIsTouched;
  const inputsAreValid = !nameHasError && !emailHasError && !messageHasError;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        {nameHasError ? (
          <ErrorMessage>Please include your name</ErrorMessage>
        ) : null}
        <input
          onFocus={onFocusName}
          onChange={onChangeName}
          onBlur={onBlurName}
          type='text'
          name='name'
          id='name'
        />
      </FormControl>

      <FormControl>
        {emailHasError ? (
          <ErrorMessage>Please include a valid email</ErrorMessage>
        ) : null}
        <input
          onFocus={onFocusEmail}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          type='email'
          name='email'
          id='email'
        />
      </FormControl>

      <FormControl>
        {messageHasError ? (
          <ErrorMessage>Please include a message</ErrorMessage>
        ) : null}
        <textarea
          onFocus={onFocusMessage}
          onChange={onChangeMessage}
          onBlur={onBlurMessage}
          name='message'
          id='message'
          cols={30}
          rows={10}
        ></textarea>
      </FormControl>

      <SubmitButton disabled={!inputsTouched || !inputsAreValid}>
        Send Message
      </SubmitButton>
    </StyledForm>
  );
}
