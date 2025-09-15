"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  return <div>Property Page {pathName}</div>;
};

export default PropertyPage;
