import logo from './logo.svg';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';


function App() {
  return (
    <div className="App bg-white px-10">
      <section className='min-h-screen'>
        <nav className='p-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>developedbysh</h1>
          <ul className='flex items-center'>
            {/* <li><FaBeer /></li> */}
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'></BsFillMoonStarsFill>
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default App;
