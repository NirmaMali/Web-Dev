import './App.css';

import ProductTab from './ProductTab.jsx';

import Button from './Button.jsx';
import Form from './Form.jsx';

function Description(){
  return <h3>Im the description</h3>
}

function App() {
  return (
    <>
    {/* <h2>Blockbuster Deals | Shop now</h2>
    <ProductTab /> */}
    <Button />
    <Form />
    </>
  )
}

export default App
