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

/*exports.oknested = function(values,resp)
{
    const hasil = values.reduce((akumulasikan,item) =>
    {  //tentukan key group
       if(akumulasikan[item.nama])
       {   //buat group nama mahasiswa
           const group =  akumulasikan[item.nama]
           
       }
    })
}*/

