import { Container, Center, Text } from "@chakra-ui/react";
import Description from "./description";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";

const Experience = () => {
	useEffect(() => {
		ScrollReveal().reveal(".reveal", {
			duration: 1000,
			delay: 500,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
	}, []);
	return (
		<Container
			className="reveal"
			maxW="container.xl"
			mt={["14", "40", "40"]}
			pt={["24", "28"]}
			pb="20"
		>
			<Center>
				<Text
					color="#ffffff"
					fontSize={["3xl", "5xl", "6xl"]}
					fontWeight="600"
					bgGradient="linear(to-l, #39FF14, #149ce9)"
					bgClip="text"
					lineHeight={["78px", "100px", "130px"]}
					mb="8"
				>
					Where I've Worked
				</Text>
			</Center>

			<Description />
		</Container>
	);
};

export default Experience;
