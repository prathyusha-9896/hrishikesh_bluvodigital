import Home from "./Home";

export async function generateMetadata() {
  return {
    title: "Hrishikesh",
    description:
      "Become a certified yoga teacher in Rishikesh",
  };
}

export default function Page() {
  return <Home />;
}
