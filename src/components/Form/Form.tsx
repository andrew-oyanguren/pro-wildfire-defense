import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #ccc;
`;

export default function Form() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type='text' name='name' id='name' />
      <input type='email' name='email' id='email' />
      <textarea name='message' id='message' cols={30} rows={10}></textarea>

      <button>Send</button>
    </StyledForm>
  );
}
