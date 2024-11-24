import { useState } from 'react'
import styles from './global.module.css'

function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calculaArea (evento) {
    evento.preventDefault();
    const num1 = parseFloat(base);
    const num2 = parseFloat(altura);

    const area = num1 * num2;
    setResultado(area);
  }

  return (
    <>
      <header>
        <h1>Calcula Area</h1>
      </header>
      <form>
        <div className={styles.calculos}>
          <input onChange={(e) => setBase(e.target.value)} value={base} placeholder='Digite a base(m)' type="number"/>
          <input onChange={(e) => setAltura(e.target.value)} value={altura} placeholder='Digite a altura(m)' type="number"/>
          <button onClick={calculaArea} type="submit">=</button>
          <p>{resultado}</p>
        </div>
      </form>
    </>
  )
}

export default App
