import {
	Container,
	Text,
	Box,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";

const Description = () => {
	useEffect(() => {
		ScrollReveal().reveal(".reveal", {
			duration: 1000,
			delay: 300,
			origin: "bottom",
			distance: "20px",
			easing: "ease-out",
		});
	}, []);
	return (
		<Container maxW="xl">
			<Accordion mx="-6" defaultIndex={0} allowToggle>
				<AccordionItem
					className="experience-block reveal"
					px={["-10", "4"]}
					py="5"
					borderWidth="0"
				>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Box>
									<Text
										fontSize={["lg", "xl"]}
										color="green.400"
										fontWeight="500"
									>
										Software Development Engineer @Otipy
									</Text>
									<Text pt="2" fontSize="sm" color="#A1A1AA">
										Gurugram, India | June 2024 - Present
									</Text>
								</Box>
							</Box>
							<AccordionIcon color="green.500" mt="-6" />
						</AccordionButton>
					</h2>
					<AccordionPanel mx={["0", "3"]} pb={4} className="experience-body">
						<Box
							p={["3px", "15px"]}
							color="#A1A1AA"
							mt="2"
							rounded="md"
							shadow="md"
							fontSize="sm"
						>
							<List spacing={2}>
								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Developed a system to reclaim excess EV inventory for B2B
										sales, achieving daily liquidation of over 16% returns
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Implemented Apache Kafka to automate stock operations and
										inventory removal, reducing errors by 25% and increasing
										processing speed by 20%.
									</ListItem>
								</Box>
							</List>
						</Box>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					className="experience-block reveal"
					px={["-10", "4"]}
					py="5"
					borderWidth="0"
				>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Box>
									<Text
										fontSize={["lg", "xl"]}
										color="green.400"
										fontWeight="500"
									>
										SDE Intern @Otipy
									</Text>
									<Text pt="2" fontSize="sm" color="#A1A1AA">
										Gurugram, India | Mar 2023 - May 2024
									</Text>
								</Box>
							</Box>
							<AccordionIcon color="green.500" mt="-6" />
						</AccordionButton>
					</h2>
					<AccordionPanel mx="3" pb={4} className="experience-body">
						<Box
							p={["3px", "15px"]}
							color="#A1A1AA"
							mt="2"
							rounded="md"
							shadow="md"
							fontSize="sm"
						>
							<List spacing={2}>
								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Orchestrated backend operations for 2 verticals, ensuring
										seamless integration and robust support.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Engineered APIs for warehouse operations, boosting
										profitability by 15%.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Innovated leave management features, reducing requests by
										20% through penalty logic implementation.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Streamlined warehouse efficiency with bag scanning APIs,
										cutting operational costs by 15%.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Expanded sales channels by integrating QueueBuster POS for
										EVs, achieving monthly revenues exceeding 2 lakh.
									</ListItem>
								</Box>
							</List>
						</Box>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					className="experience-block reveal"
					px={["-10", "4"]}
					py="5"
					borderWidth="0"
				>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Box>
									<Text
										fontSize={["lg", "xl"]}
										color="green.400"
										fontWeight="500"
									>
										Frontend Developer Intern @Powerstrip
									</Text>
									<Text pt="2" fontSize="sm" color="#A1A1AA">
										Gurugram, India | Nov 2021 - Apr 2022
									</Text>
								</Box>
							</Box>
							<AccordionIcon color="green.500" mt="-6" />
						</AccordionButton>
					</h2>
					<AccordionPanel mx="3" pb={4} className="experience-body">
						<Box
							p={["3px", "15px"]}
							color="#A1A1AA"
							mt="2"
							rounded="md"
							shadow="md"
							fontSize="sm"
						>
							<List spacing={2}>
								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Independently developed React frontend architecture and
										integrated EV charging APIs.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Integrated Razorpay for in-app payments, boosting usage by
										10% and enhancing customer experience.
									</ListItem>
								</Box>

								<Box display="flex">
									<ListIcon as={ChevronRightIcon} color="green.500" mt="1" />
									<ListItem>
										Built a map visualization tool with Google Maps and
										Directions API, increasing charger utilization by 5%.
									</ListItem>
								</Box>
							</List>
						</Box>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Container>
	);
};

export default Description;
