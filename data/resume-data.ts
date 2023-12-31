import { Github, Linkedin } from "lucide-react";

export const RESUME_DATA = {
	name: "Andrew Liu",
	description:
		"Front-End Engineer who started out in Civil Engineering at UCLA, dove into coding, and have since mixed my knack for tech with a solid business sense to create products that are useful and consumer-friendly.",
	about:
		"As a Front-End Engineer, I specialize in creating intuitive, user-centric web solutions, constantly exploring innovative ways to enhance user experience and streamline processes. My approach combines technical proficiency with a strategic business perspective, ensuring that the products I develop are not only technologically advanced but also commercially viable. I like to leverage emerging technologies to solve complex challenges and contribute to the evolution of the digital landscape.",
	contact: {
		email: "hello@andrewliu.us",
		phone: "",
		website: "",
		social: [
			{
				name: "GitHub",
				link: "https://www.github.com/levelingup",
				icon: Github,
			},
			{
				name: "LinkedIn",
				link: "https://www.linkedin.com/in/ahliu1/",
				icon: Linkedin,
			},
		],
	},
	experience: [
		{
			company: "Revolve",
			url: "https://www.revolve.com/",
			title: "Front End Engineer & Product Manager",
			start: "2017",
			end: null,
			description:
				"Front-End Engineer with a focus on A/B testing and product management, proficient in HTML, JavaScript, and CSS. Expertise in developing user-centric e-commerce interfaces, optimizing user experience, and contributing to product strategy and development.",
		},
		{
			company: "Creative Space",
			url: "https://www.creativespace.us/",
			title: "Director of Operations",
			start: "2014",
			end: "2016",
			description:
				"Led operational strategy and process optimization, spearheaded team development and management, and managed budgets, contributing to significant growth and efficiency in a dynamic startup setting.",
		},
		{
			company: "Brandow & Johnston",
			url: "https://www.bjsce.com/",
			title: "Design Engineer",
			start: "2011",
			end: "2014",
			description:
				"Specialized in innovative design solutions and project management, delivering high-quality infrastructure projects by leveraging strong technical skills in civil engineering within a collaborative engineering firm environment.",
		},
	],
	education: [
		{
			name: "UCLA",
			degree: "Bachelor of Science",
			field: "Civil Engineering",
			end: "2010",
			description: "Bachelor's of Science in Civil Engineering",
		},
	],
	skills: [
		{
			name: "JavaScript",
		},
		{
			name: "TypeScript",
		},
		{
			name: "React",
		},
		{
			name: "Next.js",
		},
	],
	projects: [
		{
			name: "Wedding Website",
			description: "My personal wedding website that was used for RSVPs.",
			url: "https://devotedtoliu.vercel.app/",
			skills: [
				{
					name: "Next.js",
				},
			],
		},
		{
			name: "Nike Landing Page",
			description: "A Nike landing page.",
			url: "https://nike-landing-sable.vercel.app/",
			skills: [
				{
					name: "React",
				},
			],
		},
		{
			name: "Just the URL",
			description: "A tool to help manipulate URLs for SEO purposes.",
			url: "https://levelingup.github.io/just-the-url/",
			skills: [
				{
					name: "Next.js",
				},
			],
		},
		{
			name: "Jira & AB Testing Chrome Extension",
			description:
				"Chrome extension built to improve Jira & AB Testing workflow.",
			url: "https://chromewebstore.google.com/detail/mgflnmcobkaocfajidpbfmfekendkkoo?hl=en",
			skills: [
				{
					name: "React",
				},
			],
		},
		{
			name: "Random Quote Generator",
			description: "Random quote generator.",
			url: "https://levelingup.github.io/quote-generator/",
			skills: [
				{
					name: "HTML",
				},
				{
					name: "JavaScript",
				},
				{
					name: "CSS",
				},
			],
		},
	],
};
