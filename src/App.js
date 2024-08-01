import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
      setData(response.data);
      console.log(response)
    };
    fetchData();
  }, []);

  const handleShowDetails = (item) => {
    setSelectedData(item);
    setStatus(!status);
  };

  // let [data,setData] = useState([])
  // useEffect(() => {
  //   fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
  //   .then((result) => {
  //     result.json()
  //   .then((resp) =>{
  //       setData(resp);
  //       console.log(resp)
  //     })
  //   })
  // },[])

  return (
    <div className="App">

      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleShowDetails(item)}>Show Details</button>
          </li>
        ))}
      </ul>

      {selectedData && (
        <div>
          <h2>{selectedData.title}</h2>
        </div>
      )} */}

      <div className="container">
      {
        data.map((item) => (
          <>
            <div className="item" onClick={() => handleShowDetails(item)}>
              <div className="img">
                <img src={item.thumbnail.small} />
                <div className='img-color-hover'>
                  <span>Learn More..</span>
                </div>
              </div>
              <div className="text">
                <div className='line-1'>
                  <div className='dot' id='dot-change'></div>
                  <div className='dot'></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className='line-2'>
                  <p>{item.author.name}-{item.author.role}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>

              { status ?
                selectedData &&  
                (
                  <div className='overflow-card'>
                    <div className='card'>
                        <div className='cross-icon'>
                        <span class="material-symbols-outlined" onClick={() => handleShowDetails(item)}>close</span>
                        </div>
                        <div className='img-card'><img src={selectedData.thumbnail.small} /></div>
                        <div className='card-text'>
                        <h2>{selectedData.title}</h2>
                        <p>{selectedData.content}</p>
                        <div className='card-img-text'>
                          <div className='avatar'><img src={selectedData.avatar}/></div>
                          <p>{selectedData.author.name} - {selectedData.author.role}</p>
                        </div>           
                        </div>
                    </div>
                  </div>
                )
             : null }  
          </>
        ))
      }
      </div>



    </div>
  );
}

export default App;
