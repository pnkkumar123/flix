import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

function TrendingSlider() {
  const [categories, setCategories] = useState([]);

  // Fetch the movies data
  const fetchMovies = async () => {
    const url = 'https://movies-api14.p.rapidapi.com/home';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '21f955141cmshf78e6e9b036eb86p12c2d6jsn5d40e03c8aac',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      console.log(result);

      // Exclude the "Trending Movies" category
      const filteredCategories = result.filter(category => category.title !== 'Trending Movies');
      setCategories(filteredCategories);
    } catch (error) {
      console.error('Error fetching movies data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((category, idx) => {
          const { movies, title } = category;
          const movieData = movies.slice(0, 3); // Take first 3 movies
          return (
            <div key={idx} style={{ marginBottom: '20px' }}>
              {/* Display category title */}
              <h2 style={{ textAlign: 'center' }}>{title}</h2>

              {/* Slider for movies */}
              <Slider {...sliderSettings}>
                {movieData.map((item, index) => {
                  const { poster_path, title } = item;
                  return (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <img
                        src={poster_path}
                        alt={title}
                        style={{ height: '250px', width: '300px', objectFit: 'cover' }}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: 'center' }}>No categories available</div>
      )}
    </div>
  );
}

export default TrendingSlider;
