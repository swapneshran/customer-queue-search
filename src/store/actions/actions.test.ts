import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {CUSTOMER_FETCH_FAILED, CUSTOMER_FETCH_STARTING, CUSTOMER_FETCH_SUCCESS} from "./actionTypes";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockApiResponse = {
    queueData: {
        queue: {
            customersToday: []
        }
    }
}

describe('test for customer queue actions', function () {
    beforeEach(() => {
        jest.resetModules();
    })
    test('test customer details fetched and fetch action dispatched', async () => {
        jest.mock('../../api/customerApi', () => {
            return {
                getCustomersFromApi: () => {
                    return Promise.resolve(mockApiResponse)
                }
            }
        })
        const {fetchCustomers} = require("./actions");
        const expectedActions = [
            {type: CUSTOMER_FETCH_STARTING},
            {
                type: CUSTOMER_FETCH_SUCCESS, payload: {
                    "customers": [],
                    "filteredCustomers": []
                }
            }
        ]
        const store = mockStore({customers: null})
        // @ts-ignore
        await store.dispatch(fetchCustomers())
        expect(store.getActions()).toEqual(expectedActions)
    })
    test('test when api fetch is failed', async () => {
        jest.mock('../../api/customerApi', () => {
            return {
                getCustomersFromApi: () => {
                    return Promise.resolve("some error in api")
                }
            }
        })
        const {fetchCustomers} = require("./actions");
        const expectedActions = [
            {type: CUSTOMER_FETCH_STARTING},
            {
                type: CUSTOMER_FETCH_FAILED
            }
        ]
        const store = mockStore({customers: null})
        // @ts-ignore
        await store.dispatch(fetchCustomers())
        expect(store.getActions()).toEqual(expectedActions)
    })

});


