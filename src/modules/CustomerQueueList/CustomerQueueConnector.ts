import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";
import {fetchCustomers} from '../../store/actions/actions'
import CustomerQueueList from "./CustomerQueueList";
import {RootState} from "../../store/store";
import {filteredCustomerSelector, isLoadingCustomers} from "../../store/selectors/Customers";

const mapStateToProps = (state: RootState) => ({
    customers: filteredCustomerSelector(state),
    isLoadingCustomers: isLoadingCustomers(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({
            fetchCustomers
        }, dispatch
    );
const CustomerQueueConnector =  connect(mapStateToProps, mapDispatchToProps)(CustomerQueueList);

export default CustomerQueueConnector