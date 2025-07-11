import getSinglePopularCollege from "@/lib/getSinglePopularCollege";

export default async function CollegeDetails({ params }) {
  const { id } = await params;
  const { userId, title, body } = await getSinglePopularCollege(id);

  return (
    <div>
      <h2 className="text-4xl">Title: {title}</h2>
      <p>{body}</p>
    </div>
  );
}
