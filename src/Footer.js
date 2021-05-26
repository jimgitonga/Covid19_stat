import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		COVID19 Realtime stats
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Web design</FooterLink>
			<FooterLink href="#">Mobile apps</FooterLink>
			<FooterLink href="#">Machine learning</FooterLink>
			<FooterLink href="#">API design</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Phone: +254701632642</FooterLink>
			<FooterLink href="#">Nairobi</FooterLink>
			<FooterLink href="#">Kenya</FooterLink>
			<FooterLink href="#">Email: jimgitongajm@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/jim.gitonga.5/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://github.com/jimgitonga">
			<i className="fab fa-github">
				<span style={{ marginLeft: "10px" }}>
				Github
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/home">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/jim-gitonga-ab7325120">
			<i className="fab fa-linkedin">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
