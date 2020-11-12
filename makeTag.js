function makeTagFunction(tag) {
    let endtag = ["img","br","hr","link","meta","input"].indexOf(tag) === -1 ? "</" + tag + ">" : ""
	return function() {
		let html, attrs = null, args

		// add start tag
		html = "<" + tag
		// change arguments object to an array
		args = Array.prototype.slice.call(arguments)

		// attributes given?
		if (typeof args[0] === "object") {
			attrs = args[0]
			args.shift()
		}

		if (attrs !== null) {
			for (let attr in attrs) {
                html += " " + attr + '="'
                // a string or
				if (typeof attrs[attr] === "string") {
					 html += attrs[attr]
                // an array of strings
				} else {
					for (let i = 0; i < attrs[attr].length; i++) {
						if (i > 0) {
							html += " "
						}
						html += attrs[attr][i]
					}
				}
                html += '"'
			}
		}

		// close tag
		html += ">"

		// process string or all callbacks
		while (args.length) {
			html += typeof args[0] === "function" ? args[0]() : args[0]
			args.shift()
		}
    	// add closing tag
    	html += endtag
		return html
	}
}

// makeTagFunction functions
const div = makeTagFunction("div")
const span = makeTagFunction("span")
const button = makeTagFunction("button")
const a = makeTagFunction("a")
const p = makeTagFunction("p")
const ul = makeTagFunction("ul")
const li = makeTagFunction("li")
const img = makeTagFunction("img")
const html_svg = makeTagFunction("svg")
const html_svg_g = makeTagFunction("g")
const html_svg_text = makeTagFunction("text")
const html_svg_rect = makeTagFunction("rect")
const html_svg_line = makeTagFunction("line")
const html_svg_path = makeTagFunction("path")
const html_svg_polygon = makeTagFunction("polygon")
const html_svg_circle = makeTagFunction("circle")
const html_textarea = makeTagFunction("textarea")
