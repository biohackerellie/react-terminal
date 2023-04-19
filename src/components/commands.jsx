const commands ={
	/* define each command as an object, with type either text or link, value being what is returned in the output, and context sets the state for further nested commands */
	help: () => ({ /* if user types help, display list of commands */
		type: "text", /* type is either text or link. Add new types in terminal.jsx file */
		value: /* value is what is returned in the output */
			"Available commands: \b\n" + 
			"'websites' - view a list of Ellie's self developed websites \b\n" +
			"'hi' - say hello to Ellie \b\n" +
			"'clear' - clear the terminal \b\n" +
			"'socials' - view a list of Ellie's social media accounts \b\n" + 
			"'about' - learn more about Ellie \b\n" +
			"'contact' - send Ellie an email \b\n"
		/* !todo	"'more commands", */
		}),
	about: () => ({ type: "text", value: "Hi! My name is Ellie Kerns, I'm 30 years old, queer af, and a nerd!. \b\n" + 
		"I'm a full stack web developer, and I'm currently working on a lot of new projects while mastering languages like javascript, python, and C#! \b\n" + 
		"When I'm not coding, I love making music, yes I'm also a producer, or playing video games. \b\n",
	}),
	hi: () => ({ type: "text", value: "Hello! :)",}),

	contact: () => ({ type: "link", value: "mailto:ellie@epklabs.com",}),
	websites: () => ({
		type: "text",
		value: "What website would you like to visit: \b\n" +
		"'portfolio' - Ellie's personal portfolio site \b\n" +
		"'docs' - Ellie's technical documentaiton \b\n" /* !todo +
		"website3" */,
		context: "websites",
	}),
	socials: () => ({
		type: "text",
		value: "What social media account would you like to visit: \b\n" +
		"'github' - Ellie's github account \b\n" +
		"'linkedin' - Ellie's linkedin account \b\n" +
		"'instagram' - Ellie's instagram account \b\n" +
		"'facebook' - Ellie's facebook account \b\n" ,
		context: "socials",

	}),
	clear: () => ({ type: "clear",}), /* clear performs a window reload, and has no output */
}


const websiteCommands = { /* each nested command is defined in the same way as the parent command */
	portfolio: () => ({ type: "link", value: "https://epklabs.com",}),
	docs: () => ({ type: "link", value: "https://docs.epklabs.com",}),
	
}

const socialsCommands = { 
	github: () => ({ type: "link", value: "https://github.com/biohackerellie",}),
	linkedin: () => ({ type: "link", value: "https://www.linkedin.com/in/ellie-kerns-ab1328a0/",}),
	instagram: () => ({ type: "link", value: "https://www.instagram.com/biohacker_ellie/",}),
	facebook: () => ({ type: "link", value: "https://www.facebook.com/elliana.kerns/",}),
}

export default  commands;
export { websiteCommands, socialsCommands};