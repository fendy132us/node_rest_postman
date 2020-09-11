'use strict';

exports.ok = function(value,resp) 
{
    var data = 
    {
        'status' :200,
        'values' :values
    }
    resp.json(data);
    resp.end();
} 