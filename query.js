window.$ = window.query = function (query) {
	const r = document.querySelectorAll(query);
	return r.length > 1 ? r : r.length === 1 ? r[0] : null;
}
HTMLElement.prototype.on = function (a,b,c) {
	for (let x of a.split(' ')) {
		this.addEventListener(x, b, c);
	}
}
