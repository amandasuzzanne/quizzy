import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => {
          console.log(`Rendering quiz with id: ${quiz.id}`);
          return (
            <li key={quiz.id}>
              <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
              <p>{quiz.description}</p>
              <p>{quiz.created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}  

export default AllQuizzes;
