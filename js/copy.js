function copy_to_clipboard(elementID)
{
	var style = 'background-color: ' + window.getComputedStyle(document.getElementById(elementID), null).getPropertyValue('background-color') + ';\n';
	style += 'background-image: ' + window.getComputedStyle(document.getElementById(elementID), null).getPropertyValue('background-image') + ';\n';

	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = style;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);

	document.getElementById('modal').style.display='flex';
	document.getElementById('modal').classList.add("fade-out");
	timeout = setTimeout(hide_modal, 3000);
}

function hide_modal()
{
	document.getElementById('modal').style.display='none';
	document.getElementById('modal').classList.remove("fade-out");
	clearTimeout(timeout);
}