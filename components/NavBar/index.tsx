import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<Link href="/">
						<img className="text-white text-lg font-semibold" />
					</Link>
					<Link href="/sobre">
						<a className="text-gray-300 hover:text-white">Sobre</a>
					</Link>
					<Link href="/contato">
						<a className="text-gray-300 hover:text-white">Contato</a>
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<button className="text-gray-300 hover:text-white">Login</button>
					{/* Adicione lógica para alternar entre Login e Logout aqui */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

