// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(res => {
        console.log(res)

        setUser(res)
      })
      
  }, [])

  return (
    <div className="App">
      {
        user.map((item, ind)=> <div key={ind}> Name = {item.name} ======= Email = {item.email} </div>)
      }
    </div>
  );
}

export default App;
