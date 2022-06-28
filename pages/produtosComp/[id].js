import { useRouter } from "next/router";

function Produtos() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Produto: {id}</h1>
    </>
  )
}

export default Produtos;
