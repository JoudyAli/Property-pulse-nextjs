import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl"> Welcom</h1>
      <Link href="/properties">Go To Properties </Link>
    </div>
  );
};

export default HomePage;
