import axiosInstance from "@/common/axios-instance";
import AuthResponse from "@/models/api/AuthResponse";
import { AxiosInstance } from "axios";

class AuthService {
  constructor(private http: AxiosInstance) {}

  async authenticateStudent(username: string, password: string) {
    const response = await this.http.post<AuthResponse>(
      "accounts/auth",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  }

  async resetPassword(username: string, password: string) {
    const response = await this.http.put<AuthResponse>(
      "accounts/reset-password",
      {
        matricNumber:username,
        password,
      },
      // {
      //   withCredentials: true,
      // }
    );
    return response.data;
  }
}

const authService = new AuthService(axiosInstance);
export default authService;
