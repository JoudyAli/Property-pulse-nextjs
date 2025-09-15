"use client";
import { useRouter, useParams, useSearchParams } from "next/navigation";
const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  return <div>Property Page {searchParams.get("name")}</div>;
};

export default PropertyPage;
