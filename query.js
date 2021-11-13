window.$ = window.query = function (query) {
	const r = document.querySelectorAll(query);
	return r.length > 1 ? r : r.length === 1 ? r[0] : null;
}
