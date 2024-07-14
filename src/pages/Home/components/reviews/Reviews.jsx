import React, { useEffect, useState } from 'react'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const fetchQuizzes =  async () => {
            try{
                const resp = await fetch('/participant/reviews',{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                if(!resp.ok){
                    throw new Error('Failed to fetch quiz data')
                }
    
                const data = await resp.json();
                console.log(data);
                setReviews(data[0])
            }
            catch(error){
                console.error(error)
            }
        };
        fetchQuizzes();
    }, [])
  return (
    <div className='allq'>
        <h1>Reviews</h1>
        <div className="all-quizzes">
            {reviews.map((review) => {
                return (
                    <div key={review.id} className='each-quiz'>
                        <div className='each-quiz-inner'>
                            <h2>{review.review_text}</h2>
                            <p>{review.created_at}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    </div>
                )
            })}
        </div>  
    </div>
  )
}

export default Reviews