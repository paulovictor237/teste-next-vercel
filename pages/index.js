import React, { ReactDOM, useState } from "react"

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
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  )
}

export default Home;