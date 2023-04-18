const commands ={
	help: () => ({
		type: "text", 
		value: 
			"Available commands: \b\n" + 
			"'websites' - view a list of Ellie's personal websites \b\n" 
		/* !todo	"'more commands", */
		}),
	hi: () => ({ type: "link", value: "https://epklabs.com",}),
	clear: () => "",
	websites: () => ({
		type: "text",
		value: "What website would you like to visit: \b\n" +
		"'portfolio' - Ellie's personal portfolio site \b\n" +
		"'docs' - Ellie's technical documentaiton \b\n" /* !todo +
		"website3" */,
		context: "websites",
	})
};

const websiteCommands = {
	portfolio: () => ({ type: "link", value: "https://epklabs.com",}),
	docs: () => ({ type: "link", value: "https://docs.epklabs.com",}),
	
}


export default  commands;
export {websiteCommands};