import axios from "axios";

const getTickets = async (pageNumber, pageSize) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/remix-run/remix/issues?page=${pageNumber}&per_page=${pageSize}`
  );
  return data;
};

export default getTickets;
