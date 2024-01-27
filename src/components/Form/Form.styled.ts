import styled from 'styled-components';
import { flexCenter } from '../../styles';

const StyledForm = styled.form`
  flex-direction: column;
  ${flexCenter}

  background-color: #eee;

  > * + * {
    margin-top: 10px;
  }
`;

const FormControl = styled.div`
  background-color: teal;

  input,
  textArea {
    background-color: pink;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  padding: 0;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? 'gray' : 'blue')};

  :disabled {
    background-color: red;
  }
`;

export { StyledForm, FormControl, ErrorMessage, SubmitButton };
