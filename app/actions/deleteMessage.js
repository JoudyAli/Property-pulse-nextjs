"use server";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is requierd");
  }

  const { userId } = sessionUser;
  const message = await Message.findById(messageId);
  if (!message) throw new Error("Message Not Found");
  // Ensure the user is the recipient of the message
  if (message.recipient.toString() !== userId) {
    throw new Error("You are not authorized to mark this message as read");
  }

  await message.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteMessage;
