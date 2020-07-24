const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'titles.json')


const getTitles = () => {
    const data = fs.existsSync(filePath) ?
        fs.readFileSync(filePath) : []

    try {
        return JSON.parse(data)
    } catch (err) {
        return []
    }
}

const saveTitle = (titles) => fs.writeFileSync(filePath, JSON.stringify(titles, null, '\t'))

const titleRoute = (app) => {
    app.route('/titles/:id?')
        .get((req, res) => {
            const titles = getTitles()
            res.send({ titles })
        })
        .post((req, res) => {
            const titles = getTitles()
            titles.push(req.body)
            saveTitle(titles)
            res.status(201).send('OK')
        })
}

module.exports = titleRoute