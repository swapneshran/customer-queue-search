import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import CustomerSearch, {DEBOUNCE_TIME} from './CustomerSearch';
import {SearchInputProps} from "./types";
import Customer from "../../models/Customer";
import CustomerMock from "../../models/CustomerMock";

const MockCustomers: Array<Customer> =  [CustomerMock]
const searchComponentProps : SearchInputProps = {
   filterCustomerData : jest.fn(),
   customers: MockCustomers
}

const setup = () => {
   const searchInputComponent= render(<CustomerSearch  {...searchComponentProps} />)
   const searchInput = screen.getByTestId('customerSearchInput') as HTMLInputElement
   return {
       searchInput,
    ...searchInputComponent
   }
}

test('renders customer search Input and fires fiter customer function when value is changed after debounced time', async () => {
   const { searchInput } = setup()
   fireEvent.change(searchInput, { target: { value: 'Some Customer Name' } })
   await waitFor(() =>
           expect(searchComponentProps.filterCustomerData).toBeCalledWith(searchComponentProps.customers, 'Some Customer Name')
       , { timeout: DEBOUNCE_TIME + 50 });

});


