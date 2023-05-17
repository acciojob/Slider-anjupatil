import React,{useState,useEffect} from "react";

const Slider=({reviews})=>{
    const [currentSlide,setCurrentSlide]=useState(0);
    
     const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    return(
        <div className="slider">
            <h2 id="review-heading">Reviews</h2>
            <div id="review-container">
                {/* {console.log(reviews)} */}
                {reviews.map((review,index)=>(
                    <div key={review.id} className={`slide ${index===currentSlide?'active':''}`}>

                        <p id={`person-${index}`}>{review.name}</p>
                        <img id={`person-${index}-image`} src={review.image} alt={review.name} />
                        <p>{review.title}</p>
                        <p>{review.quote}</p>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrevSlide}>Previous</button>
            <button className="next" onClick={handleNextSlide}>Next</button>

        </div>
    )

}

export default Slider;