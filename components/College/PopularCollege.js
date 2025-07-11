import React from "react";
import Container from "../Container/Container";
import PrimaryButton from "../Button/PrimaryButton";
import SectionTitle from "../Tiltes/SectionTitle";
import getPopularCollege from "@/lib/getPopularCollege";
import UniversityCard from "../Card/UniversityCard";

export default async function PopularCollege() {
  const populerCollege = await getPopularCollege();

  return (
    <Container className={"my-10"}>
      {/* search bar here */}
      <div className="grid grid-cols-12 gap-2 md:gap-4 py-10">
        <div className="col-span-0 md:col-span-2"></div>
        <input
          className="col-span-12 md:col-span-6 border p-2 w-full"
          type="text"
          placeholder="Start your Application"
        ></input>
        <PrimaryButton className="col-span-0 hidden md:block md:col-span-2">
          Search
        </PrimaryButton>
        <div className="col-span-0 md:col-span-2"></div>
      </div>

      {/* section Title */}
      <SectionTitle title={"Popular Colleges"} />

      {/* college cards */}
      <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {populerCollege.slice(0, 3).map((post, index) => (
          <div key={index} className="px-2 py-4 rounded-xl shadow-2xl">
            <UniversityCard />
          </div>
        ))}
      </div>
    </Container>
  );
}
