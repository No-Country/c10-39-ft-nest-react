import axios from "./axios";

export async function getAllSports(state: (data: any) => void) {
  try {
    const { data } = await axios.get("/sports");
    state(data);
  } catch (error) {
    console.error(error);
    throw new Error("Algo salió mal :(");
  }
}
