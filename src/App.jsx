import { useEffect } from 'react';
import './App.css';
import { useDispatch} from 'react-redux';
import { getProductFetch} from './redux/productSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductFetch());
  },[])

  return (
    <div>
      <h2>Redux Saga</h2>
    </div>
  )
}

export default App;
