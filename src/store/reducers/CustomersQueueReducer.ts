import { CustomerAction} from "../../models/CustomerAction";
import {CustomerState} from "../../models/CustomerAction";
import { CUSTOMER_FETCH_FAILED,
    CUSTOMER_FETCH_STARTING,
    CUSTOMER_FETCH_SUCCESS,
    USER_TYPING_COMPLETED_CUSTOMER_NAME} from "../actions/actionTypes";

const initialState: CustomerState = {
    loading: false,
    customers: null,
    filteredCustomers: null
}

const customersQueueReducer = (state: CustomerState = initialState , action: CustomerAction) => {
        switch (action.type){
            case CUSTOMER_FETCH_STARTING:
                return {
                    ...state,
                    loading: true
                };
            case CUSTOMER_FETCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    ...action.payload
                }
            case CUSTOMER_FETCH_FAILED:
                return {
                    ...state,
                    loading: false,
                    ...action.payload
                }
             case USER_TYPING_COMPLETED_CUSTOMER_NAME:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return  initialState
        }

}
export default customersQueueReducer
