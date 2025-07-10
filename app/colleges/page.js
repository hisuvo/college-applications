import getPopularCollege from "@/lib/getPopularCollege";

export default async function AllCollege() {
  const populerCollege = await getPopularCollege();
  return <div>AllCollege</div>;
}
