import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import {SearchInputProps} from "./types";

const searchComponentProps : SearchInputProps = {
    onSearchInputChange : jest.fn()
}

const setup = () => {
    const searchInputComponent= render(<SearchInput  {...searchComponentProps} />)
    const searchInput = searchInputComponent.getByTestId('customerSearchInput') as HTMLInputElement
    return {
        searchInput,
        ...searchInputComponent,
    }
}

test('renders search input with label and input element and checks for label text and placeholder', async () => {
    const searchInput= setup()
    expect(screen.getByTestId('customerSearchInput-label')).toHaveTextContent('Customer Search')
    const inputElement = await  searchInput.findByTestId('customerSearchInput') as HTMLInputElement
    expect(inputElement.placeholder).toBe('Please enter the customer name')
});

test('renders input and check for change event changes value of input', async () => {
    const { searchInput } = setup()
    fireEvent.change(searchInput, { target: { value: 'Some Customer Name' } })
    expect(searchInput.value).toBe('Some Customer Name')
});

test('renders input and check for change event fires change event prop', async () => {
    const { searchInput } = setup()
    fireEvent.change(searchInput, { target: { value: 'Some Customer Name' } })
    expect(searchComponentProps.onSearchInputChange).toBeCalled()
});

