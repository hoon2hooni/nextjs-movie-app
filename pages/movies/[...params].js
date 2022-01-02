/**
 *
 * you can put any dynamic routing from making file name [variable]
 */

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <>
      <h1>{title}</h1>
      <h3>{id}</h3>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
