import axios from "axios";

const getTickets = async (pageNumber, pageSize) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/remix-run/remix/issues?page=${pageNumber}&per_page=${pageSize}`
  );
  console.log(data);
  return data;
};

const getTicketsCount = async () => {
  const { data } = await axios.get(
    `https://api.github.com/repos/remix-run/remix/issues`
  );
  return data.length;
};
export default getTickets;
export { getTicketsCount };
