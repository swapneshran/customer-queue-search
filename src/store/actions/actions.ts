import {getCustomersFromApi} from "../../api/customerApi";
import {
    CUSTOMER_FETCH_FAILED,
    CUSTOMER_FETCH_STARTING,
    CUSTOMER_FETCH_SUCCESS,
    USER_TYPING_COMPLETED_CUSTOMER_NAME,
} from "./actionTypes";
import {CustomerAction} from "../../models/CustomerAction";
import Customer from "../../models/Customer";
import { Dispatch } from "redux";
import {filterCustomersMatchesWithCustomerName} from "../../utils/utils";

const fetchingCustomer = (): CustomerAction => {
    return {
        type: CUSTOMER_FETCH_STARTING
    }
}

const filterCustomerData = (customers: Array<Customer>, customerName: string) : CustomerAction => {
    return {
        type: USER_TYPING_COMPLETED_CUSTOMER_NAME,
        payload: {
            filteredCustomers: filterCustomersMatchesWithCustomerName(customers, customerName),
            customers: customers
        }
    }
}

const fetchedCustomer = (customersList: Array<Customer>): CustomerAction => {
    return {
        type: CUSTOMER_FETCH_SUCCESS,
        payload: {
            filteredCustomers: customersList,
            customers: customersList
        }

    }
}

const fetchedCustomerFailed = (): CustomerAction => {
    return {
        type: CUSTOMER_FETCH_FAILED
    }
}

const fetchCustomers = ()  => {
    return (dispatch: Dispatch<CustomerAction>) => {
        dispatch(fetchingCustomer())
        return getCustomersFromApi().then(data => {
            const customers = data.queueData.queue.customersToday as Array<Customer>
            return dispatch(fetchedCustomer(customers))
        }).catch(() => dispatch(fetchedCustomerFailed()))
    }
}

export {
    fetchCustomers,
    filterCustomerData
}