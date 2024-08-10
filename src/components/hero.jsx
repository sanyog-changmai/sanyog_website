import { Box, Container, Text, Button } from "@chakra-ui/react";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		ScrollReveal().reveal(".reveal-greet-text", {
			duration: 1000,
			delay: 150,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
		ScrollReveal().reveal(".reveal-name-text", {
			duration: 1000,
			delay: 200,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
		ScrollReveal().reveal(".reveal-description-text", {
			duration: 1000,
			delay: 250,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
		ScrollReveal().reveal(".reveal-btn", {
			duration: 1000,
			delay: 300,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
	}, []);
	return (
		<Container maxW="container.lg">
			<Box mt={["14", "40", "40"]}>
				<Text
					className="reveal-greet-text"
					color="#ffffff"
					fontSize={["2xl", "3xl", "2xl"]}
					fontWeight="300"
				>
					Hi, my name is
				</Text>
				<Text
					className="reveal-name-text"
					color="#ffffff"
					fontSize={["6xl", "7xl", "8xl"]}
					fontWeight="600"
					bgGradient="linear(to-l, #39FF14, #149ce9)"
					bgClip="text"
					lineHeight={["78px", "100px", "130px"]}
				>
					Sanyog Changmai
				</Text>
				<Text
					className="reveal-description-text"
					color="#ffffff"
					fontSize={["4xl", "6xl", "7xl"]}
					fontWeight="600"
					mt={["3", "auto"]}
					lineHeight={["40px", "70px", "80px"]}
				>
					I develop backend solutions for the web.
				</Text>
				<Text
					className="reveal-description-text"
					color="#A1A1AA"
					maxW="3xl"
					mt={["4", "8"]}
					fontSize={["lg", "xl"]}
				>
					I'm a Software Engineer focused on creating scalable user-friendly
					applications. Currently, I am focused on crafting reliable backend
					solutions at Otipy.
				</Text>
			</Box>

			<Box display="flex" mt={["8", "14", "14"]} className="reveal-btn">
				<a href="mailto: sanyog.changmai2003@gmail.com">
					<Button
						w="9rem"
						colorScheme="green"
						size="lg"
						fontSize="sm"
						variant="outline"
						letterSpacing="1px"
					>
						Get In Touch
					</Button>
				</a>
				<a
					href="https://drive.google.com/file/d/10Nz9gKbtnFgPTAJHRxNUNohoCes9z8yJ/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						ml="3"
						w="9rem"
						colorScheme="green"
						size="lg"
						fontSize="sm"
						variant="outline"
						letterSpacing="1px"
					>
						Resume
					</Button>
				</a>
			</Box>
		</Container>
	);
};

export default Hero;
