const router = require("express").Router();
const Helper = require('./helper');

router.get('/', (req, res) => {
    res.render("index.ejs")
})

router.post('/superheros', async (req, res) => {
    try {
        var { code } = req.body
        if (code.startsWith('0 ')) {
            code = code.split(" ")
            code = code[1].split("")
            if (code.length == 0) {
                res.json({ error: 'Please enter valid code..!' })
            } else {
                const names = Helper.names()
                arrayNames = []
                names.forEach(element => {
                    element = element.split("")
                    arrayNames.push(element)
                })
                var filteredArray = arrayNames

                for (i = 0; i < code.length; i++) {
                    words = Helper.alphabets(code[i])
                    if (filteredArray.length == 0) {
                        break;
                    } else {
                        temp = []
                        for (j = 0; j < words.length; j++) {
                            for (k = 0; k < filteredArray.length; k++) {
                                name = filteredArray[k]
                                if (name[i] == words[j]) {
                                    temp.push(filteredArray[k])
                                }
                            }
                        }
                        filteredArray = temp
                    }
                }
                data = []
                filteredArray.forEach(element => {
                    element = element.join()
                    element = element.split(',').join("")
                    data.push(element)
                })

                res.json({ hero: data })
            }
        } else {
            res.json({ error: 'Code must start with ZERO SPACE.!' })
        }
    } catch (err) {
        throw err
    }
})

module.exports = router