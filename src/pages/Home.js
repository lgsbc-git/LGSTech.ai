import React from "react";
import Hero from "../components/HomeContianer/Hero";
import AboutLGS from "../components/HomeContianer/AboutLGS";
import HomepageServices from "../components/HomeContianer/HomepageServices";
import WhyChoose from "../components/HomeContianer/WhyChoose";
import OurValues from "../components/HomeContianer/OurValues";
import Testimonials from "../components/HomeContianer/Testimonials";
import OurPartner from "../components/HomeContianer/OurPartner";
import ConsultationForm from "../components/HomeContianer/ConsultationForm";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutLGS/>
      <HomepageServices/>
      <WhyChoose/>
      <OurValues/>
      <Testimonials/>
      <OurPartner/>
      <ConsultationForm/>
    </>
  );
}
