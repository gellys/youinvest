import React from 'react';
import './global.css';
import NavBar from './components/NavBar';

import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector} from 'react-redux';
import {getData} from './actions/valueActions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.valueinvested)
  const [num, setNum] = React.useState(0);
  
  const fetchData = (time) =>{
    //Fetch Data usando time
    dispatch(getData({
      time: time,
      number: num
    }))
  }
  
 

  return (
    <div className="App">
      <NavBar />
      <h1>Seu histórico de investimentos</h1>
      <div className={"app-btn"}>
        <button onClick={() => fetchData(setNum(30))}>Ultimo</button>
        <button onClick={() => fetchData(setNum(90))}>3 Meses</button>
        <button onClick={() => fetchData(setNum(360))}>1 ano</button>
        <button onClick={() => fetchData(setNum(720))}>2 anos</button>

        
        {state.loading && <p className="app-status">Carregando...</p>}
        {state.message && <p className="app-status">Não foi possivel carregar os investimentos deste período. Tente novamente!</p>}
      </div>
      <div className="app-chart">
        <Line 
          data={state.data}
        />
      </div>
    </div>
  );
}

export default App;
