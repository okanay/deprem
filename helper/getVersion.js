export const getVersion = async () => {
  const response = await fetch("http://localhost:3000/api/getversion");
  return response.json();
};
