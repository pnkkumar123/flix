import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

function TrendingSlider() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

      // Assuming the trending movies are in a specific category, you might need to adjust this
      const trendingCategory = result.find(category => category.title === 'Trending Movies');
      if (trendingCategory && Array.isArray(trendingCategory.movies)) {
        setTrendingMovies(trendingCategory.movies); // Set the movies from the 'Trending Movies' category
      } else {
        console.error('Trending Movies category not found or empty:', result);
      }
    } catch (error) {
      console.error('Error fetching movies data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Slider settings with autoplay enabled
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the speed of autoplay (in milliseconds)
  };

  return (
    <div>
      {/* Slider for trending movies */}
      <h2 style={{ textAlign: 'center' }}>Trending Movies</h2>
      {trendingMovies.length > 0 ? (
        <Slider {...sliderSettings}>
          {trendingMovies.map((movie, index) => {
            const { poster_path, title } = movie;
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={poster_path}
                  alt={title}
                  style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </Slider>
      ) : (
        <div style={{ textAlign: 'center' }}>No trending movies available</div>
      )}
    </div>
  );
}

export default TrendingSlider;
