const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNhY2FhMzYzNDdmYjU1NWMxYzg0YzcwYjRhMWU0YyIsInN1YiI6IjY0YWY5MTlhYTQxMGM4MDBjOGIwMWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBpfbPaOHWkqph74fGIJupIgXkx6up11Khg9M5oRBY'
    }
};

const API_KEY = 'c53acaa36347fb555c1c84c70b4a1e4c';


//DISNEY+ MOVIES
export async function getDisneyPlusMovies() {
  try {
    const url = 'https://api.themoviedb.org/3/discover/movie?watch_region=US&with_watch_providers=337';
    const response = await fetch(url,options);
    const data = await response.json();
    return data.results
  } catch (error) {
    console.error('Error al obtener las películas de Disney+:', error.message);
  }
}

//******** MOVIES BY CATEGORY ****************
export async function getMovies(company){
    try{
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=${company}`
        const response = await fetch(apiUrl,options)
        const data = await response.json();
        const moviesCanWatch = data.results.filter((movie)=> movie.backdrop_path !== null);
        return moviesCanWatch
    }catch(error){
        console.log('Error al obtener las películas');
    }   
}

export async function getPixarMovies(){
    return await getMovies("3")
}
export async function getMarvelMovies(){
    return await getMovies("420")
}
export async function getNationalGeographicMovies(){
  return await getMovies("7521")
}

export async function getDisneyMovies() {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?with_companies=2,3&with_genres=16`;
    const response = await fetch(url,options);
    const data = await response.json();
    const moviesCanWatch = data.results.filter((movie)=> movie.backdrop_path !== null);
    return moviesCanWatch

  } catch (error) {
    console.error('Error al obtener las películas de Disney:', error.message);
  }
}

export async function getStarWarsMovies() {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=star-wars&language=es`;
    const response = await fetch(url,options);
    const data = await response.json();
    const moviesCanWatch = data.results.filter((movie)=> movie.backdrop_path !== null);
    return moviesCanWatch
  } catch (error) {
    console.error('Error al obtener las películas de star-wars:', error.message);
  }
}

//******** MOVIE ****************
export async function getMovieById(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=es`;
    const response = await fetch(url,options);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error al obtener la pelicula:', error.message);
  }
}

//sugerencias
export async function getRecommendedMovies(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=es&page=1`;
    const response = await fetch(url,options);
    const data = await response.json();
    const moviesCanWatch = data.results.filter((movie)=> movie.backdrop_path !== null);
    return moviesCanWatch
  } catch (error) {
    console.error('Error al obtener segerencias:', error.message);
  }
}

//videos
export async function getVideoMovies(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en`;
    const response = await fetch(url,options);
    const data = await response.json();
    const trailer = data.results.filter(video => video.type === "Trailer")
    return trailer[0].key
  } catch (error) {
    console.error('Error al obtener el video:', error.message);
  }
}

//images
export async function getImageMovies(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
    const response = await fetch(url,options);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error al obtener las imagenes:', error.message);
  }
}

//logo
export async function getLogoMovies(movieId){
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
    const response = await fetch(url,options);
    const images = await response.json();
    const logosFilter = images.logos.filter(logo => logo.iso_639_1 === "es" || logo.iso_639_1 === "en");
    const logoEs = logosFilter.find((logo) => logo.iso_639_1 === "es");
    const logoFinal = logoEs ? logoEs.file_path : logosFilter.find((logo) => logo.iso_639_1 === "en").file_path;
    return logoFinal
  } catch (error) {
  }
}

//Search Movie
export async function searchMovies(search) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false`;
    const response = await fetch(url,options);
    const data = await response.json();
    const moviesCanWatch = data.results.filter((movie)=> movie.backdrop_path !== null);
    return moviesCanWatch
  } catch (error) {
    console.error('Error al obtener las películas de star-wars:', error.message);
  }
}
