"use client";
import { useRouter } from "next/navigation";
const PropertyPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
