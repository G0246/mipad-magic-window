const { src, dest } = require('gulp');
const { options } = require('../config/process.env');
const gulpIf = require('gulp-if');
const fs = require('fs')
const gulpCopy = require('gulp-copy')

const moduleSrc = 'module_src'

const path = `${moduleSrc}/webroot/`


module.exports = async function buildWebUI(cb) {

    try {
        const pathNotEmpty = fs.readdirSync(path)
        if (pathNotEmpty && !options.is_projection && options.use_mode !== 'magicWindow') {
            return src(`${path}/**`, { dot: true }) // 指定路径
            .pipe(dest('dist/webroot/'))
            .on('end', cb);
        } else {
            cb()
        }
    } catch (err) {
        cb()
    }
}