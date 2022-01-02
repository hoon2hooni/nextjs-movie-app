/**
 *
 * you can put any dynamic routing from making file name [variable]
 */

import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <>
      <h1>{title}</h1>
      <h3>{id}</h3>
    </>
  );
}

export function getSeverSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
