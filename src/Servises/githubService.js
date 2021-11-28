import axios from "axios";

const getTickets = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/repos/microsoft/typescript/issues"
    );
    return data;
  } catch (error) {}
  return [];
};

export default getTickets;
