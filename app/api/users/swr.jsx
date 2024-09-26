import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Page() {
  const URL = "/api/users";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Lỗi</div>;
  if (isLoading) return <div>Loading</div>;
  const loadData = [];
  for (const key in data) {
    loadData.push(data[key]);
  }
  // rendu des données
  return <div>Page</div>;
}
