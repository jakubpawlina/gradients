const gradients = [
	{
		displayed_name: "Ocean",
		gradient_name: "ocean"
	},
	{
		displayed_name: "Grapefruit",
		gradient_name: "grapefruit"
	},
	{
		displayed_name: "Deep",
		gradient_name: "deep"
	},
	{
		displayed_name: "Steel",
		gradient_name: "steel"
	},
	{
		displayed_name: "Lime",
		gradient_name: "lime"
	},
	{
		displayed_name: "Beach",
		gradient_name: "beach"
	},
	{
		displayed_name: "Sundown",
		gradient_name: "sundown"
	},
	{
		displayed_name: "Red wine",
		gradient_name: "red-wine"
	},
	{
		displayed_name: "Phenolphthalein",
		gradient_name: "phenolphthalein"
	},
	{
		displayed_name: "Magnet",
		gradient_name: "magnet"
	},
	{
		displayed_name: "Peach",
		gradient_name: "peach"
	},
	{
		displayed_name: "Avocado",
		gradient_name: "avocado"
	},
	{
		displayed_name: "Amber",
		gradient_name: "amber"
	},
	{
		displayed_name: "Amethyst",
		gradient_name: "amethyst"
	},
	{
		displayed_name: "Emerald",
		gradient_name: "emerald"
	},
	{
		displayed_name: "Leaves",
		gradient_name: "leaves"
	},
	{
		displayed_name: "Turquoise Beach",
		gradient_name: "turquoise-beach"
	},
	{
		displayed_name: "Snow",
		gradient_name: "snow"
	},
	{
		displayed_name: "Magic",
		gradient_name: "magic"
	},
	{
		displayed_name: "Apple",
		gradient_name: "apple"
	},
	{
		displayed_name: "Slow Diffusion",
		gradient_name: "slow-diffusion"
	},
	{
		displayed_name: "Yerba Mate",
		gradient_name: "yerba-mate"
	},
	{
		displayed_name: "Autumn",
		gradient_name: "autumn"
	},
	{
		displayed_name: "Bunfight",
		gradient_name: "bunfight"
	},
	{
		displayed_name: "Dreamy",
		gradient_name: "dreamy"
	},
	{
		displayed_name: "Beer",
		gradient_name: "beer"
	},
	{
		displayed_name: "Sky",
		gradient_name: "sky"
	},
	{
		displayed_name: "Candy",
		gradient_name: "candy"
	},
	{
		displayed_name: "Peppermint",
		gradient_name: "peppermint"
	},
	{
		displayed_name: "City Glow",
		gradient_name: "cityglow"
	},
	{
		displayed_name: "Purple",
		gradient_name: "purple"
	},
	{
		displayed_name: "Lagoon",
		gradient_name: "lagoon"
	},
	{
		displayed_name: "Blue Lemon",
		gradient_name: "bluelemon"
	},
	{
		displayed_name: "Message",
		gradient_name: "message"
	},
	{
		displayed_name: "Exotic",
		gradient_name: "exotic"
	},
	{
		displayed_name: "Unicorn",
		gradient_name: "unicorn"
	},
	{
		displayed_name: "Mojito",
		gradient_name: "mojito"
	},
	{
		displayed_name: "Fanta",
		gradient_name: "fanta"
	},
	{
		displayed_name: "Watermelon",
		gradient_name: "watermelon"
	}
]

function display_gradient(gradient)
{
	return `
	<div class="gradient carousel-cell ${gradient.gradient_name}" id="${gradient.gradient_name}">
		<h1>${gradient.displayed_name}</h1>
		<button onclick="copy_to_clipboard('${gradient.gradient_name}')" title="Copy CSS to the clipboard!" id="copy">
			<i class="fas fa-copy"></i>
		</button>
	</div>
	`
}

document.getElementById("carousel").innerHTML += `${gradients.map(display_gradient).join('')}`