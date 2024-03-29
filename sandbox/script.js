document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'

    let lbs = e.target.value
    document.getElementById('gramsOutput').innerHTML = Math.round(lbs/0.0022046)
    document.getElementById('kilogramsOutput').innerHTML = (lbs/2.2046).toFixed(2)
    document.getElementById('ouncesOutput').innerHTML = lbs/16
})