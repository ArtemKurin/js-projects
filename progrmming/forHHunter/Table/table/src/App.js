import React, { useEffect, useState } from 'react';
import GetTableData from './GetTableData/GetTableData';
import Loader from './Loader/Loader';
import RenderInformation from './RenderInformation/RenderInformation';
import Buttons from './Buttons/Buttons';
import axios from 'axios';
import Pagination from './Pagination/Pagination'
import Search from './Search/Search';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [countPages, setCountPages] = useState(0);
  const [renderNow, setRenderNow] = useState([])
  const maxRows = 50;
  const [filteredCollection, setFilteredCollection] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [direction, setDirection] = useState(true)
  
  useEffect(() => {
    if (!isClick) {
      return;
    }
    axios.get(currentUrl)
      .then(({ data }) => {
        setData(data)
        setLoading(false)
        setFilteredCollection(data)
      })
  }, [currentUrl, isClick])

  useEffect(() => {
    if (loading) {
      return;
    }
    setRenderNow(filteredCollection.slice(0, maxRows))
    setCountPages(Math.ceil(filteredCollection.length / 50));
  }, [loading, filteredCollection, maxRows])


  return (
    <div className="container">
      {!isClick ? <Buttons setCurrentUrl={setCurrentUrl} setIsClick={setIsClick} /> :
        <>
          {
            loading ? <Loader /> :
              <>
                <Search setFilteredCollection={setFilteredCollection}
                data={data}
                setData={setData}/>
                <GetTableData renderNow={renderNow}
                  setRenderNow={setRenderNow}
                  setCurrentItem={setCurrentItem}
                  setIsShowInformation={setIsShowInformation}
                  direction={direction} 
                  setDirection={setDirection}/>
                <Pagination countPages={countPages}
                  maxRows={maxRows}
                  filteredCollection={filteredCollection}
                  setRenderNow={setRenderNow}
                  setDirection={setDirection} />
                {isShowInformation ? <RenderInformation currentItem={currentItem} /> : null}
              </>
          }
        </>
      }
    </div>
  );
}

export default App;
