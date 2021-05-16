import React, {Component, ReactNode} from "react";

type props = {
    children : ReactNode
}
type state = {
    hasError: boolean
}
class ErrorBoundary extends Component<props, state>{
    public state: state = {
        hasError: false
    }

    public static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // side effect
        console.log("Uncaught Error", error, errorInfo)
    }

    render() {
        if(this.state.hasError){
            return (<p>Something went wrong</p>)
        }
        return this.props.children
    }
}

export default ErrorBoundary