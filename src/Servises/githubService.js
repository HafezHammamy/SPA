import http from "./httpService";

const endPoint = "/remix-run/remix/issues";
const getTickets = async (pageNumber, pageSize) => {
  const response = await http.get(
    `${endPoint}?page=${pageNumber}&per_page=${pageSize}`
  );
  console.log(response);
  return response.data;
};

const getTicketsCount = async () => {
  const { data } = await http.get(endPoint);
  return data.length;
};
export default getTickets;
export { getTicketsCount };
