'use strict';

exports.ok = function(value,resp) 
{
    var data = 
    {
        'status' :200,
        'value' :value
    }
    resp.json(data);
    resp.end();
} 