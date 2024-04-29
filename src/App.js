import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const [status, setStatus] = useState(false);

  let [data,setData] = useState([])
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then((result) => {
      result.json().then((resp) =>{
        setData(resp);
      })
    })
  },[])
  return (
    <div className="App">
      <div className="container">
      {
        data.map((item) => (
          <>
            <div className="item" onClick={()=>setStatus(true)}>
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
          
      
            {
                status?  <div className='overflow-card'>
                <div className='card'>
                    <div className='cross-icon'>
                    <span class="material-symbols-outlined" onClick={()=>setStatus(false)}>close</span>
                    </div>
                    <div className='img-card'><img src={item.thumbnail.large} /></div>
                    <div className='card-text'>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <div className='card-img-text'>
                      <div className='avatar'><img src={item.author.avatar}/></div>
                      <p>{item.author.name} - {item.author.role}</p>
                    </div>           
                    </div>
                </div>
            </div> : null
            } 
        
          </>
        ))
      }
      </div>
    </div>
  );
}

export default App;
