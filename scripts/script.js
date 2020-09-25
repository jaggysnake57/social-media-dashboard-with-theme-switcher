console.log('hello');
const toggle = document.querySelector('.switch > input');
let theme = document.querySelector('.mockBody');
toggle.onclick = function(e) {
	if (theme.classList.contains('themeDark')) {
		theme.classList.remove('themeDark');
		theme.classList.add('themeLight');
	} else {
		theme.classList.remove('themeLight');
		theme.classList.add('themeDark');
	}
};
