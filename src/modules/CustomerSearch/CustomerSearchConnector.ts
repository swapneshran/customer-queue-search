import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";
import {filterCustomerData} from '../../store/actions/actions'
import CustomerSearch from "./CustomerSearch";
import {RootState} from "../../store/store";
import {allCustomers} from "../../store/selectors/Customers";

const mapStateToProps = (state: RootState) => ({
    customers: allCustomers(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({
        filterCustomerData
        }, dispatch
    );
const CustomerSearchConnector =  connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);

export default CustomerSearchConnector

