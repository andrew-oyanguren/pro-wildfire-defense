import styled from 'styled-components';
import { flexCenter } from '../../styles';
import { useInput } from '../../hooks';

const StyledForm = styled.form`
  flex-direction: column;
  ${flexCenter}

  background-color: #eee;
`;

export default function Form() {
  const {
    onChange: onChangeName,
    onFocus: onFocusName,
    onBlur: onBlurName,
  } = useInput('', (value) => {
    console.log('validating...');
    return !!value.length;
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={onChangeName}
        onFocus={onFocusName}
        onBlur={onBlurName}
        type='text'
        name='name'
        id='name'
      />
      <input type='email' name='email' id='email' />
      <textarea name='message' id='message' cols={30} rows={10}></textarea>

      <button>Send</button>
    </StyledForm>
  );
}
