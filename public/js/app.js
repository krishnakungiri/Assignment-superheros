var finalcode, value, code = null

async function showtext(id) {
    if (id != "star") {
        value = document.getElementById(id).value
        let textbox = document.getElementById("code")
        textbox.value += value
        code = textbox.value
        finalcode = code
    } else {
        value, code = null;
        let hero_name = document.getElementById('hero_name')
        printMessage('')
        document.getElementById("code").value = null
        if (finalcode == undefined) {
            finalcode = '1'
        }
        //api call
        let response = await fetch('http://localhost:8080/superheros', {
            method: "POST",
            body: JSON.stringify({
                code: finalcode
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        let data = await response.text();
        data = JSON.parse(data)

        if (data.hero) {
            hero = data.hero
            printMessage(hero)
        } else if (data.error) {
            printMessage(data.error)
        }

        function printMessage(data) {
            hero_name.innerHTML = data
        }
    }
}
