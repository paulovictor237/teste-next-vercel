/**
 * isso faz com que as informações dinamicas sejam
 * exibidas no html da página, bom para SEO
 */

// getServerSideProps ngsspr 
// getStaticProps ngspr 
// getStaticPaths ngspa 

// export const getServerSideProps = async (ctx) => {
//   const id = ctx.query.id;

//   return {
//     props: {
//       id: id
//     }
//   }
// }

export const getStaticPaths = async () => {
  return {
    paths: [{
      params: { id: '1' },
      params: { id: '2' }
    }],
    fallback: 'blocking'
    // fallback: false
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getStaticProps = async (ctx) => {
  // await delay(5000)
  const id = ctx.params.id

  return {
    props: {
      id: id
    }
  }
}

function Produtos(props) {
  // await delay(5000);
  return (
    <>
      <h1>Produto: {props.id}</h1>
    </>
  )
}

export default Produtos;
