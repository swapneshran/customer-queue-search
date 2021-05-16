import React, {FunctionComponent} from "react";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Container from "./components/Container";
import {Provider} from "react-redux";
import store from "../store/store";
import CustomerQueuePage from "../modules/CustomerQueuePage/CustomerQueuePage";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundary";


const Root: FunctionComponent = () => {
    return (
        <ErrorBoundary>
        <Provider store={store}>
        <Container>
                <Navigation>
                </Navigation>
                <Content>
                    <CustomerQueuePage />
                </Content>
        </Container>
        </Provider>
        </ErrorBoundary>
    )
}
export default Root;