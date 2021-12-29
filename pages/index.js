import Movies from "@components/Movies";
export default function Home({ results }) {
  return (
    <div>
      <Movies results={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/movies");
  const { results = [] } = await response.json();
  return {
    props: {
      results,
    },
  };
}
