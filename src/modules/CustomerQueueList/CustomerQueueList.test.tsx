import React from 'react';
import {render} from '@testing-library/react';
import CustomerQueueList from './CustomerQueueList';
import {CustomerQueueProps} from "./types";
import Customer from "../../models/Customer";
import CustomerMock from "../../models/CustomerMock";

const MockCustomers: Array<Customer> =  [CustomerMock]
const customerQueueProps : CustomerQueueProps = {
   fetchCustomers: jest.fn(),
   isLoadingCustomers: true,
   customers : null
}

const setup = (customerQueue: CustomerQueueProps) => {
   const customerQueList= render(<CustomerQueueList  {...customerQueue} />)
   return {
      customerQueList,
   }
}

test('renders customer list component with loader component when loading is true', async () => {
   const { customerQueList } = setup(customerQueueProps)
   expect(customerQueList.getByTestId('customerListLoader')).toBeInTheDocument()
   expect(customerQueueProps.fetchCustomers).toBeCalled()
});


test('renders customer list component', async () => {
   const { customerQueList } = setup({...customerQueueProps, customers: MockCustomers, isLoadingCustomers: false})
   expect(customerQueList.getByTestId('customerListGrid')).toBeInTheDocument()
   expect(customerQueueProps.fetchCustomers).toBeCalled()
});
