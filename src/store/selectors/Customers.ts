import {createSelector} from "reselect";
import {RootState} from "../store";

const filteredCustomerSelector = createSelector(
    (state: RootState)  => state.customers.filteredCustomers || null,
    (filteredCustomers) => filteredCustomers
)

const allCustomers = createSelector(
    (state: RootState)  => state.customers.customers || null,
    (customers) => customers
)

const isLoadingCustomers = createSelector(
    (state: RootState)  => state.customers.loading,
    (isLoading) => isLoading
)

export {
    filteredCustomerSelector,
    allCustomers,
    isLoadingCustomers
}