import { useState } from "react";
const Home = () => {
const[name,setName] =useState('Hasnat');
const[age,setAge]=useState('20')
    const handleclick=()=>{
       setName('hasnat');
       setAge('19');
    } 
    return ( 
        <div className="Home">
        <h2>HomePage</h2>
        <p>{name} is {age} years old</p>
       <button onClick={handleclick}>Click me</button>
       </div>
     );
}
 
export default Home;