import React from "react";
import Container from "../Container/Container";
import SectionTitle from "../Tiltes/SectionTitle";
import FeatureGrid from "./FeatureGrid";

export default function SimplifyApplication() {
  return (
    <div className="py-10 my-20 bg-amber-100">
      <Container>
        <SectionTitle
          title={"Choosing the right college can be confusing"}
          descript={
            "We're here to guide you at every step of your college journey."
          }
        />
        <FeatureGrid />
      </Container>
    </div>
  );
}
