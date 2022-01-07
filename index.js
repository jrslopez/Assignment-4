//console.log("Hello World")

let imRight = () =>
{
    const textDisplay = document.querySelector("#buttonMessage")
    const textMessage = document.createElement("p")
    textMessage.id = "message"
    console.log(textMessage)
    textMessage.innerText = "I'm right!"
    textDisplay.append(textMessage)
}

let noImRight = () =>
{
    const textMessage = document.querySelector("#message")
    textMessage.innerText = "No, I'm right!"
    console.log(textMessage)
}

let dontHoverReveal = () =>
{
    const reveal = document.querySelector('#dontHover')
    reveal.style.visibility = "visible"
}

let dontHoverHide = () =>
{
    const hide = document.querySelector('#dontHover')
    hide.style.visibility = "hidden"
}

let passwordCheck = () =>
{
    const password = document.querySelector("#pw")
    if (password.value != "12345678")
    {
        //console.log(password.value)
        const checker = document.querySelector(".checkPW")
        checker.innerText = "Password incorrect!"
    }
}

let volumeCalculate = () =>
{
    const radius = document.querySelector("#radius")
    console.log(radius.value)
    //let radius = (4/3)*Math.pi*(Math.pow(volume.value,3))
    let volume = Math.pow(radius.value, 3) * Math.PI * 4 / 3
    console.log(volume)
    const sphereVol = document.querySelector(".sphereVol")
    sphereVol.innerText = "The volume of the sphere is " + volume + " cubic units"
}