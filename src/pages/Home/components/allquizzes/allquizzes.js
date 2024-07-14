import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './allquizzes.css';

const AllQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/participant/quizzes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('All quizzes:', data);  // Log the data to check its structure
        setQuizzes(data[0]);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      }
    };

    fetchQuizzes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quizzes.length) {
    return <div>Loading...</div>;  // Show a loading state until data is fetched
  }

  return (
    <div className='allq'>
      <h1>Quizzes</h1>
    <div className="all-quizzes">
        {quizzes.map((quiz) => {
          return (
            <Link  to={`/quiz/${quiz.id}`}key={quiz.id} className="each-quiz">
              <div className='each-quiz-inner'>
              <img src={quiz.image_url} alt="img"></img>
              <p className='title'>{quiz.title}</p>
              <div className="details">
                <p>{quiz.description}</p>
                <p>{quiz.created_at}</p>
              </div>
              </div>
            </Link>
          );
        })}

    </div>
    </div>
  );
}  

export default AllQuizzes;
