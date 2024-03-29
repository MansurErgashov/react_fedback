
import './App.css';
import Header from  "./components/header/header"
// import Mentor from './components/mentor/mentor'
import Main from "./components/main/main"
import AddFeed from './moduls/addFeed/addFeed';
import { Routes, Route } from "react-router-dom"
import SinglePage from "../src/moduls/singlePage/singlePage"
import { createContext, useEffect, useState } from "react"
import EditFeed from './moduls/editFeed/editFeed';
import View from './moduls/view/view';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncFeed } from './store/asyncActions/getFeed';

export const TodosContext = createContext();
const App = () =>  {

  const dispatch = useDispatch()
  dispatch(getAsyncFeed())

  const arr = [1, 2, 3];

  const categoryArr = useSelector((state) => state.getFeed.getFeed )
  
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(arr)

  useEffect(() => {
    setTodos(categoryArr)
  }, [categoryArr])
  
  return (
    <TodosContext.Provider value={{todos, setTodos}}>

    <Routes>
      <Route path="*" element={<div className='site-wrapper container'>
        <Header />
        <Main />
      </div>}/>
      <Route path="/single/:id" element={ <div className='site-center'>
      <SinglePage count={count}  setCount= {setCount}/>
      </div>
      }/>
      <Route path="/add/:id" element={<AddFeed  count={count} setCount={setCount}/>} />
      <Route path="/edit/:id" element={<EditFeed />}/>
      <Route path="/view" element={<View />}/>
    </Routes>
    </TodosContext.Provider>
  );
}
export default App

