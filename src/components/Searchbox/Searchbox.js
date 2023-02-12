import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setSearchValue(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return toast.error('Please enter keyword for image search');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <BsSearch fill="blue" />
      </SearchFormButton>

      <SearchFormInput
        onChange={handleInputChange}
        name="searchValue"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
