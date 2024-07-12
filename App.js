
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      
      <Navbar title="Converter" aboutText="About us" />
      <div className='container my=3'>
        <TextForm heading = "Enter the text to analyzer below" />
        </div>
      </>
  );
}

export default App;
