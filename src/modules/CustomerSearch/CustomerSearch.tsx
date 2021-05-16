import React, { FC } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import {SearchInputProps} from "./types"
import { debounce } from 'throttle-debounce';
export const DEBOUNCE_TIME = 300

const CustomerSearch: FC<SearchInputProps> = (props)=> {
   const customers =  props.customers;

   const debounceInput = debounce(DEBOUNCE_TIME, (value) => {
      props.filterCustomerData(customers, value)
   });

   const onInputChange = (value: string) => {
      debounceInput(value);
   }

   return (
      <SearchInput onSearchInputChange={onInputChange} />
   )
}

export default  CustomerSearch;