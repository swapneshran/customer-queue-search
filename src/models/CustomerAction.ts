import Customer from "./Customer";
import {AnyAction} from "redux";

type CustomerState = {
    loading: boolean,
    customers: Array<Customer> | null,
    filteredCustomers: Array<Customer> | null,
}

type CustomerAction = {
    type : string,
    payload?: {
        filteredCustomers: Array<Customer>,
        customers: Array<Customer>
    }
}

export type { CustomerAction, CustomerState}