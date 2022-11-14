import React from 'react'

function Alert(props) {

  const capitalize =(word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (

    // this syntax says that if props.alert if false then further command will not work and if it is true then next statement is also checked.
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize (props.alert.type)}</strong>: {props.alert.msg}
  
</div>
  )
}

export default Alert