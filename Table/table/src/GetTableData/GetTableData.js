import React, { useState } from 'react';
import _ from 'lodash';
import Icon from './icon';

const GetTableData = ({ renderNow, setCurrentItem, setRenderNow, setIsShowInformation, direction, setDirection }) => {
    const [keyNow, setKeyNow] = useState('');


    const sort = (key) => {
        const sortById = _.sortBy(renderNow, [function (o) { return o[key] }]);
        if (keyNow === key) {
            const dataSortById = direction ? sortById : sortById.reverse()
            setRenderNow(dataSortById)
            setDirection(!direction)
        } else {
            const dataSortById = sortById
            setRenderNow(dataSortById)
            setDirection(false)
        }
        setKeyNow(key);
    }

    const showInformation = (item) => {
        setCurrentItem(item)
        setIsShowInformation(true)
    }

    const dataInTable = renderNow.map((item) => {
        return (
            <tr className='cursor-default' key={_.uniqueId()} onClick={() => showInformation(item)}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
        )
    });

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className='cursor-pointer' scope="col" onClick={() => sort('id')} >id <Icon /></th>
                    <th className='cursor-pointer' scope="col" onClick={() => sort('firstName')}>FirstName <Icon /></th>
                    <th className='cursor-pointer' scope="col" onClick={() => sort('lastName')}>LastName <Icon /></th>
                    <th className='cursor-pointer' scope="col" onClick={() => sort('email')}>email <Icon /></th>
                    <th className='cursor-pointer' scope="col" onClick={() => sort('phone')}>phone <Icon /></th>
                </tr>
            </thead>
            <tbody>
                {dataInTable}
            </tbody>
        </table>
    )
};

export default GetTableData;