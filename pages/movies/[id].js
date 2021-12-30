/**
 * 
 * you can put any dynamic routing from making file name [variable]
 */ 

import { useRouter } from "next/router";


export default function Detail() {
  const router = useRouter();
  console.log(router);
  return <h1>detail Here</h1>;
}
