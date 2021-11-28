export default function paginate(items, pageNumber, pageSize) {
  const pageData = items.splice((pageNumber - 1) * pageSize, pageSize);
  return pageData;
}
