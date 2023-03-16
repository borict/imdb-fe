import ApiService from "./ApiService";

class MovieService extends ApiService {
  getMovies = async () => {
    const response = await this.client.get("/movies");
    return response;
  };
}

const movieService = new MovieService();
export default movieService;
