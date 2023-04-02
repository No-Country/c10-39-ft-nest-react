import axios from "./axios";

export async function getAllSports(state: (data: any) => void) {
  try {
    const { data } = await axios.post("/sports");
    state(data);
  } catch (error) {
    console.error(error);
    throw new Error("Algo salió mal :(");
  }
}
