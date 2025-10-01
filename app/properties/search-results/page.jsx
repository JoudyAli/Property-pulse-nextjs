import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";

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
  console.log(properties);
  return <div>Serach Results</div>;
};

export default SearchResultsPage;
