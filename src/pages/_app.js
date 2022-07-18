import Link from 'next/link';
import { useRouter } from 'next/router';
import "../assets/global.css";
import SideBar from "../layouts/SideBar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const Layout = ({ children }) => <div className="layout">{children}</div>
  return (
    <Layout>

      <header style={{ display: 'inline - flex' }}>
        {router.pathname != '/' ?
          (<Link href="/">Voltar para Home</Link>) :
          (<></>)}
      </header>
      <SideBar />
      <Component {...pageProps} />
    </Layout>
  )
}
