(function () {
    const response = {
        type: 'page',
        body: [
            {
                type      : 'action',
                actionType: 'ajax',
                api       : 'get:/api/welcome',
                label     : 'Jsonp Schema',
            }
        ]
    }

    window.jsonpCallback && window.jsonpCallback(response)
})()
