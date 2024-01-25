import styled from 'styled-components';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

type ButtonSizeType = 'SMALL' | 'MEDIUM' | 'LARGE';

type ButtonProps = {
  action: () => void;
  disabled?: boolean;
  size: ButtonSizeType;
  text: string;
  primary: boolean;
};

const StyledButton = styled.button<{
  $primary: boolean;
  $size: ButtonSizeType;
}>`
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  background-color: ${(props) =>
    props.$primary ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.SECONDARY};
  font-size: ${(props) => BUTTON_SIZES[props.$size]}px;
`;

export default function Button({
  action = () => {},
  disabled = false,
  size = 'SMALL',
  text = '',
  primary,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={action}
      $primary={primary}
      $size={size}
    >
      {text}
    </StyledButton>
  );
}
