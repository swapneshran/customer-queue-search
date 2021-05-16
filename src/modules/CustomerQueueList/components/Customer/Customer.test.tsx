import React from 'react';
import {render} from '@testing-library/react';
import Customer from './Customer';
import { CustomerInfoProp } from "./types";
import CustomerMock from "../../../../models/CustomerMock";

const customerInfoProp : CustomerInfoProp = {
   customerInfo : CustomerMock
}

const setup = () => {
   const customer= render(<Customer  {...customerInfoProp} />)
   return {
      customer,
   }
}

test('renders customer list component with loader component when loading is true', async () => {
   const { customer } = setup()
   expect(customer.getByTestId('profilePic')).toBeInTheDocument()
   expect(customer.getByTestId('customerName')).toBeInTheDocument()
   expect(customer.getByText(/Name: Fraser/i)).toBeDefined()
   expect(customer.getByTestId('customerEmail')).toBeInTheDocument()
   expect(customer.getByText(/fraser@qudini.com/i)).toBeDefined();
});


