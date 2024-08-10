import { Container, Center, Text, Button } from "@chakra-ui/react";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		ScrollReveal().reveal(".reveal-contact-title", {
			duration: 1000,
			delay: 400,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
		ScrollReveal().reveal(".reveal-contact-text", {
			duration: 1000,
			delay: 450,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
		ScrollReveal().reveal(".reveal-contact-btn", {
			duration: 1000,
			delay: 500,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
	}, []);
	return (
		<Container
			maxW="container.xl"
			mt={["14", "40", "40"]}
			mb={["10rem", "15rem", "15rem"]}
			pt={["10", "24", "28"]}
		>
			<Center>
				<Text
					className="reveal-contact-title"
					color="#ffffff"
					fontSize={["3xl", "5xl", "6xl"]}
					fontWeight="600"
					bgGradient="linear(to-l, #39FF14, #149ce9)"
					bgClip="text"
					lineHeight={["78px", "100px", "130px"]}
				>
					Get In Touch
				</Text>
			</Center>

			<Center>
				<Text
					className="reveal-contact-text"
					color="#A1A1AA"
					textAlign="center"
					maxW="2xl"
					mt={["4", "6"]}
					fontSize={["lg", "lg", "xl"]}
				>
					I’m open to hearing about new opportunities. Feel free to reach out to
					me if you have a question, or just want to say hi!
				</Text>
			</Center>

			<Center mt="10" mb="8">
				<a href="mailto: sanyog.changmai2003@gmail.com">
					<Button
						className="reveal-contact-btn"
						ml="3"
						w="9rem"
						colorScheme="green"
						size="lg"
						fontSize="sm"
						variant="outline"
						letterSpacing="1px"
					>
						Say Hello
					</Button>
				</a>
			</Center>

			<Center>
				<Text
					className="reveal-contact-text"
					color="#A1A1AA"
					textAlign="center"
					maxW="2xl"
					fontSize="sm"
				>
					Let's connect on LinkedIn
				</Text>
			</Center>
			<Center mt="4" mb="10">
				<a
					href="https://www.linkedin.com/in/sanyogchangmai29/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						className="reveal-contact-btn"
						ml="3"
						w="9rem"
						colorScheme="blue"
						size="lg"
						fontSize="sm"
						variant="outline"
						letterSpacing="1px"
					>
						LinkedIn
					</Button>
				</a>
			</Center>
		</Container>
	);
};

export default Contact;
