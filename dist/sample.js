window.addEventListener('load', function() {
    var settings = Settings.create()

    var btn = document.getElementById('open_settings')
    btn.addEventListener('click', function() {
        settings.open()
    })

    var color = settings.addRadio({
        title: 'color',
        key: 'color',
        description: 'setumei',
        choices: ['black', 'red', 'green'],
        defaultValue: 'black'
    })
    color.on('settingsChange', function(event) {
        console.log(event)
    })

    var speed = settings.addCounter({
        title: 'speed',
        key: 'ball speed',
        description: 'setumei',
        min: 1,
        max: 10,
        defaultValue: 3
    })
    speed.on('settingsChange', function(event) {
        console.log(event)
    })
})