import { setUser } from "../App/userSlice";
import axios from "./axios";

interface UserData {
  user: any;
  token: string;
}

export async function getHello(state: (data: any) => void) {
  try {
    const petition = await axios.get("/");
    state(petition.data);
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error("algo salio mal :(");
  }
}

export async function registerUser(body: any) {
  try {
    const petition = await axios.post<UserData>("/users/register", body);
    setUser(petition?.data.user);
    localStorage.setItem("tkn", petition?.data.token);
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error("algo salio mal :(");
  }
}

export async function loginUser(body: any) {
  try {
    const petition = await axios.post<UserData>("/user/login", body);
    setUser(petition?.data.user);
    localStorage.setItem("tkn", petition?.data.token);
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error("algo salio mal :(");
  }
}

export async function authUser(): Promise<void> {
  const token = localStorage.getItem("tkn");
  try {
    const petition = await axios.get("/users/auth", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setUser(petition?.data);
    localStorage.setItem("user", petition?.data);
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    localStorage.removeItem("tkn");
    window.location.pathname = "/";
  }
}
