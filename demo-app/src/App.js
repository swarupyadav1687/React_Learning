import './App.css';

let name="Swarup"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact US</li>
    </nav>
      <div className='container'>
        <h1>Hello {name}</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, blanditiis? Neque, facere incidunt reprehenderit beatae distinctio maiores minus vero, eum atque excepturi sint quidem praesentium a repellat unde ipsa cum!
      </div>
    </>
  );
}

export default App;