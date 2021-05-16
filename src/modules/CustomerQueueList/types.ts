import Customer from "../../models/Customer";

type CustomerQueueProps = {
    fetchCustomers: Function,
    isLoadingCustomers: boolean,
    customers : Array<Customer> | null
}
type CustomerListProps = {
    customers : Array<Customer> | null
}

export type {
    CustomerQueueProps,
    CustomerListProps
}