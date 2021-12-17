import React, { useState } from 'react';
import InputForm from '../inputForm/inputForm';
import cn from 'classnames';

const Search = ({ setFilteredCollection, data, setData }) => {
    const [searchValue, setSearchValue] = useState('')
    const [isFormRendered, setIsFormRendered] = useState(false)

    const handleSarching = () => {
        const filtered = data.filter((item) => {
            return item.id.toString().toLowerCase().includes(searchValue.toLowerCase().trim())
                || item.firstName.toLowerCase().includes(searchValue.toLowerCase().trim())
                || item.lastName.toLowerCase().includes(searchValue.toLowerCase().trim())
                || item.email.toLowerCase().includes(searchValue.toLowerCase().trim())
                || item.phone.toLowerCase().includes(searchValue.toLowerCase().trim())
        })
        setFilteredCollection(filtered)
    }

    const handleShowForm = () => {
        setIsFormRendered(!isFormRendered)
    }
    const cname = cn('btn', {
        'btn-outline-primary': !isFormRendered,
        'btn-primary': isFormRendered
    })
    return (
        <>
            <div className="input-group mb-3" style={{ marginTop: '20px' }}>
                <input type="text"
                    className="form-control"
                    placeholder="Что-то ищем?"
                    aria-label="Что-то ищем?"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    style={{boxShadow: 'none'}}
                    onChange={(event) => setSearchValue(event.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" 
                    type="button" style={{boxShadow: 'none'}} onClick={handleSarching}>Найти</button>
                    <button className={cname}
                    type="button" style={{boxShadow: 'none', marginLeft: '15px'}} onClick={handleShowForm}>Добавить</button>
                </div>
            </div>
            {isFormRendered ? <InputForm setData={setData}
                setFilteredCollection={setFilteredCollection}
                data={data}/> : null}
        </>
    )
}
export default Search;