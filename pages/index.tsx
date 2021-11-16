import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>TerraSystem - Soluçoes Tecnologicas</title>
				<meta
					name="description"
					content="solucoes tecnologicas para empresas e particulares"
				/>
				<link rel="icon" href="/logo.png" />
			</Head>

			<main className={styles.main}>
				<NavBar />
			</main>

			<article>
				<section>
					<Image src="/logo.png" alt="logo" width={200} height={200} />
				</section>
			</article>

			<Footer />
		</div>
	);
};

export default Home;
