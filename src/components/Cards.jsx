import './Cards.css';
import MainCard from './MainCard';
import Navbar from './Navbar';

function Cards() {
  return (
    <div className='App'>
      <div className='insideApp'>
        <div className="card">
            <Navbar/>
            <MainCard/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
