
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }


const DateFunc = () =>{
  const now = new Date();
  return (
    <>
    <h3>Hello  World!, it is {now.toString().slice(0,15)} <br/>Time- {now.toString().slice(15,25)} <br/> TimeZone- {now.toString().slice(25,55)}</h3>
    </>
  )
}

const User = ({name,index}) =>{
  return (
    <>
    <h2 key={index}> Hello {name} !</h2>
    </>
    )
}

const App = () =>{
  const users = ["Nishant","Sathish","Ajay"]
  return (
    <div>
      <DateFunc/>
      <h1>Greetings</h1>
      {users.map((name,index)=><User key={index} name={name}/>)}
    </div>
  )
}

export default App;
