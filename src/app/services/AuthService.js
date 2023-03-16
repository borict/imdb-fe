import ApiService from "./ApiService";

class AuthService extends ApiService {
  login = async (credentials) => {
    const response = await this.client.post("/login", credentials);
    localStorage.setItem("token", response.data.authorisation.token);
    return response.data;
  };

  register = async (user) => {
    try {
      const response = await this.client.post("/register", user);
      console.log(response);
      localStorage.setItem("token", response.data.authorisation.token);
      return response.data;
    } catch (e) {
      console.log("É:", e);
    }
  };
}

const authService = new AuthService();
export default authService;
