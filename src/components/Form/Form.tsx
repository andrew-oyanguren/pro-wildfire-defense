import styled from 'styled-components';
import { flexCenter } from '../../styles';
import { useInput } from '../../hooks';

const StyledForm = styled.form`
  flex-direction: column;
  ${flexCenter}

  background-color: #eee;
`;

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
      <input
        onFocus={onFocusName}
        onChange={onChangeName}
        onBlur={onBlurName}
        type='text'
        name='name'
        id='name'
      />

      <input
        onFocus={onFocusEmail}
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
        type='email'
        name='email'
        id='email'
      />

      <textarea
        onFocus={onFocusMessage}
        onChange={onChangeMessage}
        onBlur={onBlurMessage}
        name='message'
        id='message'
        cols={30}
        rows={10}
      ></textarea>

      <button disabled={!inputsTouched || !inputsAreValid}>Send</button>
    </StyledForm>
  );
}
