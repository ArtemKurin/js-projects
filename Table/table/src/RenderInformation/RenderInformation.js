import React from 'react';

const RenderInformation = ({ currentItem }) => {
    const address = currentItem.address
    const currentDectription = currentItem.description
    const streetAddress = address ? address.streetAddress : null
    const city = address ? address.city : null
    const state = address ? address.state : null
    const zip = address ? address.zip : null

    return (
        <>
        {currentItem ? <div>
            <div>Выбран пользователь: <b>{currentItem.firstName} {currentItem.lastName}</b></div>
            Описание:
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={currentDectription}/>
            </div>
            <div>Адрес проживания: <b>{streetAddress}</b></div>
            <div>Город: <b>{city}</b></div>
            <div>Провинция/штат: <b>{state}</b></div>
            <div>Индекс: <b>{zip}</b></div>
            </div> : null}
        </>
    )
}
export default RenderInformation;