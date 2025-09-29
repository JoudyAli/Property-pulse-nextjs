"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import cloudinary from "@/config/cloudinary";

async function deleteProperty(properyId) {
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is requierd");
  }

  const { userId } = sessionUser;
  const property = await Property.findById(properyId);
  if (!property) throw new Error("Property Mot Found");

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  // Extract public Id from image URLs
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });
  //delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("propertypulse/" + publicId);
    }
  }

  await property.deleteOne();
  revalidatePath("/", "layout");
}

export default deleteProperty;
