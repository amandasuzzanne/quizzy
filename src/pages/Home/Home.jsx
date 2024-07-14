import './Home.css';
import AllQuizzes from './components/allquizzes';


function Home(){
    return (
      <div className="home-container">
        <AllQuizzes />  {/* component to display all quizzes */}
      </div>
    );
}

export default Home;