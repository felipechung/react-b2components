import styled from 'styled-components';

export default styled.select`
  border: 2px solid ${(props) => props.theme.colors.gray.six};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  padding: 0 17px 0 17px;

  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' class='svg-inline--fa fa-chevron-down fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='%23666666' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path></svg>");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: 50%;
  background-size: 15px 15px;
`;
