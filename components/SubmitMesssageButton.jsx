import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitMesssageButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center"
    >
      <FaPaperPlane className="mr-2" />{" "}
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
};

export default SubmitMesssageButton;
