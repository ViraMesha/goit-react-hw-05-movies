import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 14px;
  border: 1px solid #e8eaf6;
  border-radius: 5px;
  outline: none;
  padding: 5px;

  &::placeholder {
    font: inherit;
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 2px solid #6472c1;
  }
`;
