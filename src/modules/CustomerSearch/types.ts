import Customer from "../../models/Customer";

type SearchInputProps = {
    filterCustomerData: Function,
    customers: Array<Customer> | null
}

export type {
    SearchInputProps
}