import styles from "../../styles/Home.module.css";


const Footer = () => {
	return (
		<footer className="text-center  p-4 fixed bottom-0 w-full">
		<div className="flex items-center justify-center">
		  <a
			href="https://terrasystem.cv"
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-800 font-bold"
		  >
			Powered by TerraSystem{" "}
		  </a>
		</div>
	  </footer>
	);
};

export default Footer;
