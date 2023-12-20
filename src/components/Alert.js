import React from 'react'

export default function Alert(props) {
    return (
        props.alertMessage &&<div>
            <div className={`alert alert-${props.alertMessage.ty} alert-dismissible fade show`} role="alert">
               <strong> {props.alertMessage.msg}</strong> 
            </div>
        </div>
    )
}
