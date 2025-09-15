"use client";
import { useRouter, useParams } from "next/navigation";
const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  return <div>Property Page {params.id}</div>;
};

export default PropertyPage;
