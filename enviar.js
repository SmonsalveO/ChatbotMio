let botId = '111084942093960';
let numero = '573011398898';
let token = 'EAAUuCNyIVrQBO0Hi4ncmTVWrcmrhEMUahkecnxf0DHt2CmWdiIaLk3CQYbGVG1ZANLpFj9b8xZAqVS8E7772CaHE0JX51se5GLogSHTzV4dPGZCo1peqk2jML9E418PAOzlZBw4MfjyQj8NE1q0vf8qCpZBzTsDGApA5eNAwGoOSNTZAygzUXlVDAEHjlZBCra3TsIv3F0Du2kQ71ZCZCMF4ZD';

let url = 'https://graph.facebook.com/v17.0/'+botId+'/messages';
var data ={
    messaging_product: 'whatsapp',
    to: numero,
    type: 'template',
    template:{
        name:'hello_world',
        language:{code:'en_US'}
    }
};

var postReq = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    json: true
};

fetch(url, postReq).then(data =>{
    return data.json()
}).then(res =>{
    console.log(res)
}).catch(error => console.log(error));