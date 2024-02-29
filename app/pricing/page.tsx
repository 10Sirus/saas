
import Breadcrumb from "@/components/Breadcrumb";
import Pricing from "@/sections/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | SaaS Website",
  description: "This is About Page for website",
};

const PricePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
      />
    <Pricing />
    </>
  );
};

export default PricePage;
