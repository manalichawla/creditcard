import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  
  const [number, setNumber] = useState("### ### ### ###");

const [name, setName] = useState("");

const [date, setDate]= useState("MM");

const [date2, setDate2]= useState("YYYY");

const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Card Submitted....`)
}

  return (
    <>
    
    <div style={{height:"100px"}}></div>

<div className="container">
<div className="row">
  <div className="col-md-3"></div>
    <div className="col-md-4 bg1 ms-5 p-0 m-0">
<div className="col-md-12">
  <img src="img/visa-logo-png-transparent.png" style={{height:"70px",width:"90px",marginLeft:"250px"}}/>
<div style={{height:"55px"}}></div>

<div style={{color:"white",marginLeft:"130px"}}>{number}</div>

<div style={{height:"30px"}}></div>

<div className="row">
<div className="col-md-6 text-white "><p className='ms-3'>Full Name:{name}</p></div>
<div className="col-md-4 text-white p-0 m-0">{date}-{date2}</div>



</div>


</div>
</div>
    </div>
</div>

    
    
    
<div className="container">
<div className="row">
  <div className="col-md-3"></div>
    <div className="col-md-4 ms-5 p-0 m-0" style={{backgroundColor:"#ddeefc",height:"400px",borderRadius:"10px"}}>
      <div style={{height:"40px"}}></div>
<form action=""  onSubmit={handleSubmit}>
<input type="number" style={{height:"40px",width:"280px",border:"1px solid white",backgroundColor:"yellow",color:"black",borderRadius:"10px"}} className='ms-5' onChange={(n) => setNumber(n.target.value)} placeholder="card number"/>

<div style={{height:"30px"}}></div>


<input type="text" style={{height:"40px",width:"280px",border:"1px solid white",backgroundColor:"yellow",color:"black",borderRadius:"10px"}} className='ms-5'
onChange={(f) => setName(f.target.value)}  placeholder='Card Holder'/>

<div style={{height:"30px"}}></div>

<select style={{height:"40px",width:"130px",border:"1px solid white",backgroundColor:"yellow",color:"black",borderRadius:"10px"}} className='ms-5' onChange={(y) =>
setDate(y.target.value)}>
 <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>

</select>

<select style={{height:"40px",width:"100px",border:"1px solid white",backgroundColor:"yellow",color:"black",borderRadius:"10px"}} className='ms-5' onChange={(x) =>
setDate2(x.target.value)}>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
</select>

<div style={{height:"30px"}}></div>

<button style={{height:"50px",width:"280px",backgroundColor:"yellow",color:"black",border:"none",borderRadius:"10px"}} className='ms-5'>SUBMIT</button>
</form>
</div>
</div>
</div>

    </>
  );
}

export default App;
