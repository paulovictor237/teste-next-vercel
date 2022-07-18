import Link from 'next/link'
import React, { useState } from "react"
import HelloTilwind from "../componets/HelloTilwind.tsx"

function Contador() {
  const [contador, setcontador] = useState(1)
  function adicionarcontador() {
    setcontador(contador + 1)
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarcontador}>Adicionar</button>
    </div>
  )
}

function Home() {
  return (
    <div className='channel-bar shadow-lg'>
      <HelloTilwind />
      <h1>Home</h1>
      <Contador />
      <h1>Pages</h1>
      <Link href="/produtosComp/123">/produtosComp/123</Link> <br />
      <Link href="/produtosNovo/123">/produtosNovo/1</Link>
      <h1>API</h1>
      <Link href="/api/tempo">/api/tempo</Link> <br />
      <Link href="/api/produtosApi/123">/api/produtosApi/123</Link>
    </div>
  )
}

export default Home;
