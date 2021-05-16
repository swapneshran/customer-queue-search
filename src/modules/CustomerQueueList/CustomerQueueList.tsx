import React, {FC, Fragment, useEffect} from "react";
import Customer from "../../models/Customer";
import Loading from './../../core/components/Loader/Loader'
import CustomerDetails from "./components/Customer/Customer";
import Grid from "../../core/components/Grid/Grid";
import GridItem from "../../core/components/Grid/Item";
import {CustomerQueueProps, CustomerListProps} from './types'

const REFRESH_TIME_INTERVAL = 30000


const CustomerList: FC<CustomerListProps> = (props: CustomerListProps)=> {
    return ( <Grid data-testid={'customerListGrid'} >
        {props.customers && props.customers.map((val: Customer, id:number) => {
            return (<GridItem key={id}><CustomerDetails key={id} customerInfo={val}/></GridItem>)
        })}
    </Grid>)
}

const CustomerQueueList: FC<CustomerQueueProps> = (props: CustomerQueueProps) => {
    useEffect(() => {
        props.fetchCustomers()
        const intervalId = setInterval(()=> {
            props.fetchCustomers()
        }, REFRESH_TIME_INTERVAL)
        return  ()=> clearInterval(intervalId)
    }, [])


    return (<Fragment>
        <h2>Customer List</h2>
        {props.isLoadingCustomers ?
            <Loading data-testid={'customerListLoader'}></Loading>:
            <CustomerList customers={props.customers} /> }
    </Fragment>)

}

export default CustomerQueueList