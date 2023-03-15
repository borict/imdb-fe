import HttpService from "./HttpService";

class AuthService extends HttpService {
  register = async (user) => {
    const response = await this.client.post("/register", user);
    console.log(response);
    localStorage.setItem("token", response.data.authorisation.token);
    return response.data;
  };
}

const authService = new AuthService();
export default authService;
