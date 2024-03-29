import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  IUpdateUserDto,
  IUser,
  IUserCreateDto,
  IUserLoginResponseDto,
} from "../interfaces/User";

//This users services is made for http request and nothing more...
export class UserService {
  private api: AxiosInstance;
  constructor(private baseUrl: string) {
    this.api = axios.create({
      baseURL: `${baseUrl}`, //http://localhost:3001
    });
  }

  public async HelloWorld() {
    const res = await this.api.get("/");
    return res.data;
  }

  public async loginUser(
    email: string,
    password: string
  ): Promise<IUserLoginResponseDto> {
    const response = await this.api.post("/auth/local", {
      email,
      password,
    });
    return response.data;
  }

  public async registerUser(
    user: IUserCreateDto
  ): Promise<{ token: string; user: IUser }> {
    const res = await this.api.post("/user", {
      name: user.name,
      email: user.email,
      password: user.password,
      provider: user.provider,
    });
    return res.data;
  }

  async getUser(id: string) {
    const jwtToken = await localStorage.getItem("token");
    const user = await this.api.get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return user.data;
  }

  public async updateUser(
    userId: string,
    userData: IUpdateUserDto
  ): Promise<any> {
    const jwtToken = await localStorage.getItem("token");

    const response = await this.api.patch(`/user/${userId}`, userData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  }

  public async updateFCMToken(userId: string, fcmToken: string): Promise<any> {
    const response = await this.api.patch(`/user/${userId}/fcmToken`, {
      fcmToken,
    });
    return response.data;
  }

  public async requestPasswordReset(email: string): Promise<any> {
    const response = await this.api.post("/user/request-password-reset", {
      email,
    });
    return response.data;
  }

  public async resetPassword(token: string, newPassword: string): Promise<any> {
    const response = await this.api.post("/user/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  }

  public async resetEmail(token: string, newEmail: string): Promise<any> {
    const response = await this.api.post("/user/update-email", {
      token,
      newEmail,
    });
    return response.data;
  }

  public async deleteAccount() {
    console.log("deleteAccount");
    const jwtToken = await localStorage.getItem("token");
    const response = await this.api.delete(`/user`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  }

  public async verifyResetToken(token: string) {
    const response = await this.api.post("/user/verify-reset-token", {
      token,
    });
    return response.data;
  }

  public async verifyEmail(token: string) {
    const response = await this.api.post("/user/verify-email", {
      token,
    });
    return response.data;
  }
}
