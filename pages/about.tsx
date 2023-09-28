import Layout from "../components/Layout"

const navigation = [
	{ name: 'Serviços', href: '/servicos' },
	{ name: 'Docs & Posts', href: '/repository' },
	{ name: 'Marketplace', href: '/marketplace' },
	{ name: 'Sobre', href: '/about' },
]

const About= () => {
    return (
        <Layout navigation={navigation} title="Sobre Nós - TerraSystem, Soluções Tech e Web">
            <p>terra about</p>
        </Layout>
        
    )
}

export default About