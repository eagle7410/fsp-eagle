const fsp = require('../fsp');
const jsdoc2md = require('jsdoc-to-markdown');

void async function build() {
	try {
		const markDown = await jsdoc2md.render({ files: 'fsp.js' });
		await fsp.writeFile(`${__dirname}/../ext.md`, markDown);
	} catch (e) {
		console.error('Error in build doc ', e);
	} finally {
		process.exit();
	}
}();


