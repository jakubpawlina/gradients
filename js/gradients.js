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
	}
]

function display_gradient(gradient)
{
	return `
	<div class="gradient ${gradient.gradient_name}" id="${gradient.gradient_name}">
		<h1>${gradient.displayed_name}</h1>
		<button onclick="copy_to_clipboard('${gradient.gradient_name}')" title="Copy CSS to the clipboard!" id="copy">
			<i class="fas fa-copy"></i>
		</button>
	</div>
	`
}

document.getElementById("gallery").innerHTML += `${gradients.map(display_gradient).join('')}`