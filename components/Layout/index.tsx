import Navbar from '../NavBar'
import Footer from '../Footer'
import Head from "next/head"

interface LayoutProps {
    navigation: { name: string; href: string }[];
    children: React.ReactNode;
    title: string;
  }
 
 const Layout: React.FC<LayoutProps> = ({ children, navigation, title }) => {
  return (
    <>
      <Head>
			  <title> {title} </title>
		  </Head>
		  <div className="bg-white overflow-hidden">
		    <Navbar nav={navigation}/>      
        <div className="relative isolate px-8 pt-24 lg:px-8">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout