import getPopularCollege from "@/lib/getPopularCollege";

export default async function AllCollege() {
  const populerCollege = await getPopularCollege();
  console.log(populerCollege);
  return <div>AllCollege</div>;
}
