import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
export const Register = (props) => {
    const [customer, setCustomer] = useState({})
    const conflictDialog = useRef()
    
    const history = useHistory()
    const postNewUser = (object)=>{
       return fetch("http://localhost:8088/customers", {
                           method: "POST",
                           headers: {
                               "Content-Type": "application/json"
                           },
                           body: JSON.stringify(object)
                       })
                           .then(res => res.json())
   }
   const existingUserChecks = (customerEmail)=>{
    return fetch(`http://localhost:8088/customers?email=${customerEmail}`)
    .then(res => res.json())
}
    const existingUserCheck = () => {
        return existingUserChecks(customer.email)
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                        postNewUser(customer)
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("thorns_customer", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Honey Rae Repairs</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateCustomer} type="text" id="address" className="form-control" placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer} type="email" id="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

