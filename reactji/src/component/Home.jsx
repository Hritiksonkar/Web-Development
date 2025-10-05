//  import React from 'react'
// import Modal from './Modal'
// import Button from './Button'
// // default props and props with values
// const Home = ({data=0,name="defaultName"}) => {
//   let a=40+ data;

//   return (
//     <div>
//         <p>This is the home page = {data} and name = {name} with a value = {a}</p>
//         <Modal data={"codinghunger"} btncomps={<Button text={"Submit"} />} />
//     </div>

//    )
//  }

//  export default Home
//  import React from 'react'

//  const Home = ({searchtext}) => {
//    return (
//      <div>{searchtext}</div>
//    )
//  }

//  export default Home
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext, ThemeContext } from '../App';

const Home = () => {
  const { searchtext, setsarchtext } = useContext(SearchContext);
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use navigate here if needed
  };

  return (
    <div className={`home-container${dark ? ' dark' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchtext}
          onChange={(e) => setsarchtext(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="card-list">
        <div className="t-card">
          <h2>Card 1</h2>
          <p>This is the first card.</p>
        </div>
        <div className="t-card">
          <h2>Card 2</h2>
          <p>This is the second card.</p>
        </div>
        <div className="t-card">
          <h2>Card 3</h2>
          <p>This is the third card.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;