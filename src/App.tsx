import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import DrawImages from './components/drawImages/drawImages';
import DrawListOfCategories from './components/drawListOfCategories/drawListOfcategories';
import Header from './components/header/header';
import { loadCategoriesFromAPI } from './ducks/loadCategories';
import { loadImagesFromAPI } from './ducks/loadImages';

function App() {

  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');

  const dispatch = useDispatch();

  const setToggleBar = () => {
    setToggleSideBar(!toggleSideBar)
  }
  const setCategoryId = (id: string) => {
    setActiveCategoryId(id)
  }

  useEffect(() => {
    dispatch(loadCategoriesFromAPI())
  }, [])

  return (
    <div className="App">
      <Header setToggleBar={setToggleBar} />
      <DrawListOfCategories setCategoryId={setCategoryId} toggleSideBar={toggleSideBar} />
      <DrawImages activeCategoryId={activeCategoryId} toggleSideBar={toggleSideBar} />
    </div>
  );
}

export default App