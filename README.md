# Gradients

![Generic badge](https://img.shields.io/badge/HTML-5-f06529.svg) ![Generic badge](https://img.shields.io/badge/CSS-3-2965f1.svg) ![Generic badge](https://img.shields.io/badge/Java-Script-EED81D.svg) ![Generic badge](https://img.shields.io/badge/Font_Awesome-v5.15.1-099268.svg) ![Generic badge](https://img.shields.io/badge/Flickity-2.2.2-EE55AA.svg)

Website available [here](https://jakubpawlina.github.io/gradients/).

## Description
Gradients library for UI designing. Choose gradient, copy its CSS code and use it in your project!

## Screenshots
![Screenshots](screenshots.jpg)

## Contributing
#### Adding gradients
1. Add a gradient to the file ```css/gradients.css```. Here is a basic scheme of the code looks like this:
	```css
	.{name}
	{
		background-color: rgb({0-255}, {0-255}, {0-255});
		background-image: linear-gradient({0-359}deg, rgba({0-255}, {0-255}, {0-255}, {0-1}) {0-100}%, rgba({0-255}, {0-255}, {0-255}, {0-1}) {0-100}%);
	}
	```
2. Add a gradient to ```index.html``` file, as the last element in a div 'gallery'. The code should look like this:
	```html
	<div class="gradient {gradient-name}" id="{gradient-name}">
		<h1>{Displayed Name}</h1>
		<button onclick="copy_to_clipboard('{gradient-name}')" title="Copy CSS to the clipboard!" id="copy">
			<i class="fas fa-copy"></i>
		</button>
	</div>
	```
#### Other contributions
Feel free to suggest your own ideas. This is the magic of the open source!

## License
Project is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html). It regards a project itself - of course, all gradients can be used without any special limitations.

![GPLv3 Logo](https://www.gnu.org/graphics/gplv3-with-text-136x68.png)