window.addEventListener('load', function() {
    var settings = Settings.create()

    var btn = document.getElementById('open_settings')
    btn.addEventListener('click', function() {
        settings.open()
    })

    settings.on('open', function() {
        console.log('onOpen')
    })

    settings.on('close', function () {
        console.log('onClose')
    })

    var color = settings.addRadio({
        title: 'color',
        key: 'color_1',
        description: 'setumei',
        choices: ['black', 'red', 'green'],
        defaultValue: 'black'
    })
    color.on('settingsChange', function(event) {
        console.log(event)
    })

    var speed = settings.addCounter({
        title: 'speed',
        key: 'ball_speed',
        description: 'setumei',
        min: 1,
        max: 10,
        defaultValue: 3
    })
    speed.on('settingsChange', function(event) {
        console.log(event)
    })

    var select = settings.addSelect({
        title: 'select title',
        key: 'select',
        description: '',
        choices: ['select 1', 'select 2', 'select 3'],
        defaultValue: 'select 1'
    })
    select.on('settingsChange', function (event) {
        console.log(event)
    })

    settings.open()

})