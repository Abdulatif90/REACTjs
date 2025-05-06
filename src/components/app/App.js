import './App.css';
import Header from '../header/Header';
import Button from '../button/Button';
import Field from '../field/Field';

function App (){
  return (
    <div className='App'>  
      <Header/>
      {/* <Footer/> */}
      <Field/>
      <Button/>
    </div>
  )
}

export default App;
