"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import addMessage from "@/app/actions/addMessage";
import SubmitMesssageButton from "./SubmitMesssageButton";

const initialState = { submitted: false, error: null };

const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();

  // Correct hook: useFormState
  const [state, formAction] = useFormState(addMessage, initialState);

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.submitted) toast.success("Message sent successfully");
  }, [state]);

  if (state.submitted) {
    return <p className="text-green-500 mb-4">Your Message has been sent</p>;
  }

  return (
    session && (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
        <form action={formAction}>
          <input
            type="hidden"
            name="property"
            defaultValue={property._id || ""}
          />
          <input
            type="hidden"
            name="recipient"
            defaultValue={property.owner || ""}
          />

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone:
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="body"
              name="body"
              placeholder="Enter your message"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
            ></textarea>
            <SubmitMesssageButton />
          </div>
        </form>
      </div>
    )
  );
};

export default PropertyContactForm;
