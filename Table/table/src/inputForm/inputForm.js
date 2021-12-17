import React, { useState } from 'react';
import cn from 'classnames';

const InputForm = ({ setFilteredCollection, setData, data }) => {
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const bu = (e) => {
        const amountId = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'))[0].value.length
        
        const amountFirstName = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'))[1].value.length
        
        const amountlastName = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'))[2].value.length
        
        const amountEmail = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'))[3].value.length
        
        const amountPhone = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'))[4].value.length
        
        amountId === 0 || amountFirstName === 0 || amountlastName === 0 || amountEmail === 0 || amountPhone === 0 ? setIsDisabled(true) : setIsDisabled(false)
    }
    const handleAddInTable = () => {
        if (id.length > 0 && firstName.length > 0 && lastName.length > 0 && email.length > 0 && phone.length > 0) {
            setData([{
                id,
                firstName,
                lastName,
                email,
                phone,
            }, ...data])

            setFilteredCollection([{
                id,
                firstName,
                lastName,
                email,
                phone,
            }, ...data])

            setId('')
            setFirstName('')
            setlastName('')
            setEmail('')
            setPhone('')
        }
        setIsDisabled(true)
    }

    return (
        <form id="myForm" onChange={(e) => bu(e)}>
            <div className="row">
                <div className="form-group col-md-1 mt-3">
                    <input type="text" className="form-control" style={{boxShadow: 'none'}} id="inputId" onChange={(event) => setId(event.target.value.trim())} value={id} placeholder="id" />
                </div>
                <div className="form-group col-md-2 mt-3">
                    <input type="text" className="form-control" style={{boxShadow: 'none'}} id="inputFirstName" onChange={(event) => setFirstName(event.target.value.trim())} value={firstName} placeholder="FirstName" />
                </div>
                <div className="form-group col-md-2 mt-3">
                    <input type="text" className="form-control" style={{boxShadow: 'none'}} id="inputlastName" onChange={(event) => setlastName(event.target.value.trim())} value={lastName} placeholder="lastName" />
                </div>
                <div className="form-group col-md-3 mt-3">
                    <input type="text" className="form-control" style={{boxShadow: 'none'}} id="inputEmail" onChange={(event) => setEmail(event.target.value.trim())} value={email} placeholder="Email" />
                </div>
                <div className="form-group col-md-3 mt-3">
                    <input type="text" className="form-control" style={{boxShadow: 'none'}} id="inputPhone" onChange={(event) => setPhone(event.target.value.trim())} value={phone} placeholder="Phone" />
                </div>
                <div className="form-group col-md-1 mt-3">
                    <button className={cn("btn btn-primary", { 'disabled': isDisabled })} style={{boxShadow: 'none'}} type="button" id='myButton' onClick={handleAddInTable} >Добавить</button>
                </div>
            </div>
        </form>
    )
}
export default InputForm;