export default async function getSinglePopularCollege(id) {
  console.log("parms id here --", id);
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await result.json();
  return data;
}
