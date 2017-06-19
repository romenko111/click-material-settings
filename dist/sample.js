window.addEventListener('load', function() {
    var settings = Settings.create()

    var btn = document.getElementById('open_settings')
    btn.addEventListener('click', function() {
        settings.open()
    })

    settings.addRadio({
        title: 'color',
        key: 'color',
        description: 'setumei',
        choices: ['a', 'b', 'c'],
        defaultValue: 'a'
    })
})