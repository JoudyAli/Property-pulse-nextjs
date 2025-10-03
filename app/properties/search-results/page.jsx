import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { FaArrowCircleLeft } from "react-icons/fa";

const SearchResultsPage = async ({ searchParams }) => {
  await connectDB();
  const { location, propertyType } = await searchParams;

  const locationPattern = new RegExp(location, "i");
  const query = {
    $or: [
      { name: locationPattern },
      { descrption: locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { " location.zipCode": locationPattern },
    ],
  };
  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.propertyType = typePattern;
  }

  const propertiesQueryReault = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryReault);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex items-center  text-blue-500 hover:underline mb-3"
            mb-3
          >
            <FaArrowCircleLeft className="mr-2 mb-1" /> Back to All Properties
          </Link>
          <h2 className="text-2xl font-semibold mb-4">Search Results </h2>
          {properties.length === 0 ? (
            <p className="text-gray-600">No properties found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
