import './Home.css';
import AllQuizzes from './components/allquizzes/allquizzes';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Reviews from './components/reviews/Reviews';


function Home(){
    return (
      <div className="home-container">
        <Navbar /> {/* component to display navigation bar */}
        <Main/>
        <div className="container">
          <AllQuizzes />  {/* component to display all quizzes */}
        </div>
        <div className='container'>
          <Reviews/>
        </div>
      </div>
    );
}

export default Home;