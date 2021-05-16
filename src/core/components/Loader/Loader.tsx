import React, {FC} from "react";
import './Loader.css'

type loaderProps={
    "data-testid"?: string
}
const Loading: FC<loaderProps> = (props) => {
    return (
        <div data-testid={props["data-testid"]} className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading