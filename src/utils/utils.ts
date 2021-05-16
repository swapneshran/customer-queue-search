import Customer from "../models/Customer";

const filteredCustomers = (customers: Array<Customer>, customerName: string) => customers.filter(value=> {
    if(!customerName){
        return customers
    }
    return value.customer.name.indexOf(customerName.trim()) !== -1
})


const filterCustomersMatchesWithCustomerName = (customers: Array<Customer>, customerName: string) => {
    return filteredCustomers(customers, customerName )
}

export {
    filteredCustomers,
    filterCustomersMatchesWithCustomerName
}