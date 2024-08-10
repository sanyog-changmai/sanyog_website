import { Container } from "@chakra-ui/react";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Experience from "../components/experience";

const Home = () => {
	return (
		<Container maxW="container.lg">
			<Hero />
			<Experience />
			<Contact />
		</Container>
	);
};

export default Home;
