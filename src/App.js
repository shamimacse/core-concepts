import React, {useEffect, useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ['Anowar', 'Jafor', 'Alomgir', 'salman']
  const products =[
    {name:'photoshop', price:'$90.20'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'premium ', price:'$6.99'},
]

  return (
    <div className="App">
      <header className="App-header">
        
        <p>my first react paragraph</p>
        <Counter></Counter>
        {/* <Counter2></Counter2> */}
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        {
          products.map(product =><li>{product.name}</li> )
        }
        </ul>
        {
          products.map(product => <Product product ={product}></Product>)
        }
        
      </header>
    </div>  
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>count: {count}</h1>
     {/* <button onClick={handleIncrease}>Increase</button> */}
     <button onMouseMove={() => setCount(count + 1)}>Increase</button>
     <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>dynamic users: {users.length}</h3>
      {/* {
        console.log(users)
      } */}
      <ul>
        {
          // users.map(user => <li>{user.name}, {user.email}, {user.phone}</li>)
          users.map(user => <li>{user.name}</li>),
          users.map(user => <li>{user.phone}</li>),
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

// function Counter2(){
//   const [count, setCount] = useState(10);
//   const handleIncrease = () => {
//     const newCount3 = count - 1;
//     setCount(newCount3);
//   };
//   return(
//     <div>
//       <h1>count: {count}</h1>
//      <button onClick={handleIncrease}>Decrease</button>
//     </div>
//   )
// }


function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}



function Person(props) {
  return(
  <div style={{border: '3px solid yellow' , margin:'10px'}}>
    <h3>my name: {props.name}</h3>
    <p>my profession:{props.job}</p>
  </div>
  )
}

export default App;
