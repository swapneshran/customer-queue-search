import React, {FC} from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import Name from '../CustomerName/Name';
import CustomerEmail from '../CustomerEmail/Email'
import Content from '../CustomerContent/Content';
import ProfilePicture from "../ProfilePic/ProfilePicture";
import {CustomerInfoProp} from "./types";


const CustomerDetails: FC<CustomerInfoProp> = (props) =>{
    return ( <CustomerCard>
        <Content>
            <ProfilePicture data-testid={'profilePic'}/>
            <Name data-testid={'customerName'}>Name: {props.customerInfo.customer.name}</Name>
            <CustomerEmail data-testid={'customerEmail'}>Email : {props.customerInfo.customer.emailAddress}</CustomerEmail>
        </Content>
    </CustomerCard>) ;
}
export  default  CustomerDetails;