import React from 'react';
import { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./Dashboard'));
const Employee = React.lazy(()=> import('./Employee'));

export default function Header(props) {
    
    if(props.value === 1){
        return (
            <Suspense fallback = {<div>Hi wait, getting thing ready for you!</div>}>
                <Dashboard/>
            </Suspense>
        )
    } else if (props.value === 2){
        debugger
        return(
            <Suspense fallback = {<div>Hi wait, getting thing ready for you!</div>}>
                <Employee/>
            </Suspense>
        )
    }

}