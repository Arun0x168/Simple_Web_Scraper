const _xhr = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');

class _l{
    constructor(_u){
        this._u=_u;
    }
    _r(){
        let _r={
            _obj:{},
            _s:()=>{
                let _x = new _xhr();
                _x.open("GET",this._u,false);
                new Promise((resolve)=>{
                    resolve();
                }).then(()=>{_x.send()}).then(()=>{if(_x.readyState==4&&_x.status==200){
                    _r._obj["_ctx"]=_x.responseText;
                    _r._q();
                }else{
                    console.log(`Request error! a status of  ${_x.status} was received ,aborting..`);
                }}).catch((error)=>{console.error(error)});
            },
            _q:()=>{
                fs.writeFile("body.html",_r._obj["_ctx"],(e)=>{
                    if(e) throw e;
                });
                fs.readFile("body.html",'utf8',(e,d)=>{
                    if(e) throw e;
                    let _e,_r;
                    _e = d;
                    _r = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
                    fs.writeFile("list","↓↓↓LINKS↓↓↓\n"+"\n"+_e.match(_r).join("\n"),(e)=>{if(e) throw e;});
                });
                fs.readFile("body.html",'utf8',(e,d)=>{
                    if(e) throw e;
                    let _e,_r,_n;
                    _e = d;
                    _r = /[a-zA-Z0-9\\+\\.\\_\\%\\-]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+/gi;
                    _n = _e.match(_r);
                    _n!==_n?fs.appendFile("list",_n.join("\n"),(e)=>{if(e) throw e}):fs.appendFile("list","\n"+"\nNo emails",(e)=>{if(e) throw e});
                })
            }
        }
        return _r;
    }
}

let ab = new _l("PUT YOUR URL HERE");
ab._r()._s();
