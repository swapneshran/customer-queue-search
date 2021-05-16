
import customersQueueReducer from "./CustomersQueueReducer";
import {CustomerAction, CustomerState} from "../../models/CustomerAction";
import CustomerMock, {SecondCustomerMock} from "../../models/CustomerMock";
describe('tests for CustomerQueuereducer', function () {
    beforeEach(() => {
        jest.resetModules();
    })


    const initialState: CustomerState = {
        loading: false,
        customers: null,
        filteredCustomers: null
    }

    test('tests for when customer queue is loading', async () => {
        const  expectedState: CustomerState = {
            loading: true,
            customers: null,
            filteredCustomers: null
        }
        const ladingAction: CustomerAction = {
            type: 'CUSTOMER_FETCH_STARTING'
        }
        const state = customersQueueReducer(initialState, ladingAction);
        expect(state).toEqual(expectedState)
    })

    test('tests for when customer queue is loaded', async () => {
        const  expectedState: CustomerState = {
            loading: false,
            customers: [CustomerMock, SecondCustomerMock],
            filteredCustomers: [CustomerMock, SecondCustomerMock]
        }
        const ladingAction: CustomerAction = {
            type: 'CUSTOMER_FETCH_SUCCESS',
            payload: {
                customers: [CustomerMock, SecondCustomerMock],
                filteredCustomers: [CustomerMock, SecondCustomerMock]
            }
        }
        const state = customersQueueReducer(initialState, ladingAction);
        expect(state).toEqual(expectedState)
    })
    test('tests for when customer queue loading failed', async () => {
        const expectedState: CustomerState = {
            loading: false,
            customers: null,
            filteredCustomers: null
        }
        const ladingAction: CustomerAction = {
            type: 'CUSTOMER_FETCH_FAILED',
        }
        const state = customersQueueReducer(initialState, ladingAction);
        expect(state).toEqual(expectedState)
    })

});


