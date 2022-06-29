const Layout = ({ children }) => <div className="layout">{children}</div>
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>

      <header style={{ display: 'inline - flex' }}>
        {router.pathname != '/' ?
          (<Link href="/">Voltar para Home</Link>) :
          (<></>)}
      </header>
      <Component {...pageProps} />
    </Layout>
  )
}