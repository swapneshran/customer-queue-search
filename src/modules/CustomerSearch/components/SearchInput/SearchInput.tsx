import React, {ChangeEvent, ChangeEventHandler, FC, Fragment, useState} from "react";
import styled from "styled-components";
import {SearchInputProps} from "./types";

const SearchInputElement = styled.input`
    width:100%;
    height: 30px;
    border: 2px blue solid;
    outline: none;
    font-size: 25px;
    padding: 10px;
   ;
`
const SearchInputLabel = styled.label`
    font-size: 25px;
    font-family: "Helvetica", "Arial", "sans serif";
   ;
`

const SearchInput: FC<SearchInputProps> = ({onSearchInputChange}: SearchInputProps) => {
    const [searchValue, setSearchValue] = useState("")
    
    const onChangeHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        onSearchInputChange(e.target.value)
    }

    return (
        <Fragment>
            <SearchInputLabel data-testid="customerSearchInput-label" htmlFor="customerSearchInput">Customer Search</SearchInputLabel>
            <SearchInputElement data-testid="customerSearchInput" id="customerSearchInput" type="text" placeholder={'Please enter the customer name'}
                   value={searchValue}
                   onChange={onChangeHandler}
            />
        </Fragment>

    )
}

export default SearchInput;