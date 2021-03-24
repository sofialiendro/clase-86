// import logo from './logo.svg';
import './App.css';
import Boton from './components/boton'    
import Tarjeta from "./components/tarjeta"

// hay q escribir la ruta igual aunque esten en la misma carpeta


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




//// ejemplo de JSX (PERMITE COMBINAR JS CON HTML) TIENEN JS PERO RETORNAN HTML


const App = () => {

  const primerNombre = "Sofia"
  const apellido = "Liendro"
  

  return (
    // <></> es un "fragmento de react" para q react nos deje agregar mas etiquetas, no solo retornar 1
    <>   
      <div>
        <p>HOLA, {primerNombre + " " + apellido}, ESTO ES REACT</p>
        
        
      </div>
      <div>
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      
      </div>
      <Boton />
    </>
    
  );
}


export default App;