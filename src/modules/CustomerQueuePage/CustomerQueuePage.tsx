import React, {FC} from "react";
import CustomerQueueConnector from "../CustomerQueueList/CustomerQueueConnector";
import CustomerSearchConnector from "../CustomerSearch/CustomerSearchConnector";
import styled from "styled-components";

const PageHeader = styled.h1`
text-align: center;
`
const CustomerQueuePage: FC = ()=> {
  return (<div>
          <PageHeader> Customers In Queue</PageHeader>
            <CustomerSearchConnector />
            <CustomerQueueConnector />
      </div>)
}

export default  CustomerQueuePage;