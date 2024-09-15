import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://qt-be.vercel.app",
      timeout: 10000,
      headers: {
        "Content-Yype": "application/json",
      },
    });
  }
}

const http = new Http().instance;

export default http;
