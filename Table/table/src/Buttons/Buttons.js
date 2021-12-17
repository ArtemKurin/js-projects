import React from 'react';

const Buttons = ({ setIsClick, setCurrentUrl }) => {
    
  const handleClick = (url) => {
    setCurrentUrl(url);
    setIsClick(true);
  }
    const bigDataUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const littleDataUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    return (
        <div className="d-grid gap-2 col-6 mx-auto">
            <h4>Выберите количество загружаемых данных</h4>
            <button className="btn btn-primary" type="button" onClick={() => handleClick(littleDataUrl)}>32</button>
            <button className="btn btn-primary" type="button" onClick={() => handleClick(bigDataUrl)}>1000</button>
        </div>
    )
}
export default Buttons;