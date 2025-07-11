import PrimaryButton from "@/components/Button/PrimaryButton";
import UniversityCard from "@/components/Card/UniversityCard";
import Container from "@/components/Container/Container";
import getPopularCollege from "@/lib/getPopularCollege";
import Link from "next/link";

export default async function AllCollege() {
  const populerCollege = await getPopularCollege();

  return (
    <Container className={"py-10"}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {populerCollege.map((item, index) => (
          <div key={index} className="border p-4">
            <h2>{item.userId}</h2>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.body}</p>
            <Link href={`/colleges/${item.id}`}>
              <PrimaryButton>Details</PrimaryButton>
            </Link>
          </div>
          // <UniversityCard key={index} />
        ))}
      </div>
    </Container>
  );
}
