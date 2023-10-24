import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../app/components/Homepage"), {
  ssr: false,
});

export default function Home() {
  return <HomePage />;
}
