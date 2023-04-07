import axios from "./axios";

export async function getSportFieldsWithSport(state: (data: any) => void) {
  try {
    const { data } = await axios.get("/sportfields/sport");
    state(data);
  } catch (error) {
    console.error(error);
    throw new Error("Algo salió mal :(");
  }
}
