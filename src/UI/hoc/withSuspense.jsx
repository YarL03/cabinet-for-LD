import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component) => {

    return (props) => {
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Component {...props}/>
        </React.Suspense>} 
}
