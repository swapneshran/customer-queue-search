import {filteredCustomers, filterCustomersMatchesWithCustomerName} from './utils'
import CustomerMock, {SecondCustomerMock} from "../models/CustomerMock";
describe('for utils methods', function () {
    beforeEach(() => {
        jest.resetModules();
    })

    const listOfCustomers = [CustomerMock, SecondCustomerMock]
    test('tests for when name matches', async () => {
        const filteredCustomer = filteredCustomers(listOfCustomers, 'Saj')
        expect(filteredCustomer.length).toBe(1)
    })

    test('tests for when name does not match', async () => {
        const filteredCustomer = filteredCustomers(listOfCustomers, 'Name does not match')
        expect(filteredCustomer.length).toBe(0)
    })

});


