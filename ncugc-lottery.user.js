// ==UserScript==
// @name         [NCUGC] 抽獎系統
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  抽抽抽
// @namespace    https://github.com/Artis24106
// @author       Artis24106
// @match        https://lab.sp88.com.tw/luckydraw/
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Artis24106/artis-tampermonkey/master/ncugc-lottery.js
// @downloadURL  https://raw.githubusercontent.com/Artis24106/artis-tampermonkey/master/ncugc-lottery.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) {
        return;
    }
    style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
}

function gooo() {
    $("#hacker").addClass("right-good");
}
(function() {
    "use strict";
    addGlobalStyle(".right-good { right: 5000px !important; }");
    $("body").empty();
    $("body").append(
        '<body><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><style>.text-size{font-size:1.2rem!important}nav{background-color:#e7e7e7!important;color:#777!important;font-weight:700!important;padding-top:8px!important;padding-bottom:8px!important;line-height:20px!important}.btn-nav-c{color:#fff!important;font-weight:700!important}.btn-ccc{width:100%!important;background-color:#337ab7!important;font-size:1.5rem!important}.btn-c{background-color:#337ab7!important;color:#fff!important;font-size:15px!important;padding:4px 8px!important;font-weight:700!important}.h1-c{font-size:2rem!important;font-weight:500!important;color:#333!important}.h2-c{font-size:1.5rem!important;font-weight:500!important;color:#333!important}.tr-c{border-bottom:#eee 1px solid!important;padding-bottom:50px!important}textarea{border:solid 1px #999!important;border-radius:5px!important;padding:.6rem!important;font-size:20px!important}td{background-color:#fff!important}*{font-family:"Source Sans Pro",Helvetica,Arial,"PingFang TC","Microsoft JhengHei","微軟正黑",sans-serif;letter-spacing:.025rem!important}input{width:75px!important}#hacker{font-weight:900;top:0;position:fixed;transition:20s;font-size:200px;right:-5000px}</style><nav class="navbar navbar-default navbar-fixed-top unselectable hidden-print"><!-- Brand and toggle get grouped for better mobile display --><div class="navbar-header container-fluid"><div class="navbar-brand pull-left d-flex" style="float:left" href="https://hackmd.io/"><i class="fa fa-file-text"></i> <span class="hidden-xs" style="font-size:17px!important">&nbsp;NCUGC 抽獎系統</span></div><button class="btn btn-c"><i class="fa fa-users"></i> <span>&nbsp;87&nbsp;連線</span></button></div></nav><div class="container mt-4"><form name="form1" id="form1" onsubmit="return(!1)()"><table width="100%" border="0" cellspacing="10" cellpadding="0" align="center" bgcolor="#dddddd"><tbody><tr height="30" class="tr-c"><td width="30%"><span class="box2 text-size h1-c">抽獎人數：</span> <input class="text-size h1-c" style="border:none!important;background-color:transparent!important" name="lu_c1" id="lu_c1" value="0" size="8" class="input80" readonly></td><td width="70%"><span class="box2 text-size h1-c">中獎人數：</span> <input class="text-size h1-c" style="border:none!important;background-color:transparent!important" type="text" name="lu_c2" id="lu_c2" value="1" size="8" class="input80"></td></tr></tbody></table><table class="mt-4 container" width="100%" border="0" cellspacing="10" cellpadding="0" align="center" bgcolor="#dddddd"><tbody><tr><td width="30%"><textarea wrap="off" style="width:90%;height:350px" id="lu_x1" name="lu_x1" onchange="chg_x1()" onblur="chg_x1()" onkeyup="chg_x1()"></textarea></td><td width="70%"><textarea wrap="off" style="width:100%;height:350px" id="lu_x2" name="lu_x2"></textarea></td></tr></tbody></table><input name="bt1" type="button" class="mt-4 btn btn-ccc btn-primary" value="抽 獎 !" onclick="lucky()"></form></div><div style="list-style-type:decimal;height:30px;margin-left:30px"><script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script><script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.4/seedrandom.min.js"></script><script language="JavaScript" src="_u8_func.js?v=beta2"></script><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><script>(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-2288541414682517",enable_page_level_ads:!0})</script><script>function chg_x1(){var e=document.form1,n=e.lu_x1.value.trim();if(""==n)e.lu_c1.value=0;else{var t=n.split("\n");e.lu_c1.value=t.length}}function reset(){var e=document.form1;e.lu_x2.value="",document.getElementById("msg2").innerHTML=""}function gen(){var e=document.form1,n=prompt("請輸入抽獎人數",100),t="";if(1==chk_number(n)){for(i=1;i<=n;i++)t+=i+"\r\n";e.lu_x1.value=t,chg_x1()}}function lucky(){var e=document.form1;if(0==chk_number(e.lu_c2.value))return alert("中獎人數格式錯誤"),e.lu_c2.focus(),!1;var n=e.lu_x1.value.trim(),t=/\ns*\n/g;if(n=n.replace(t,"\n"),e.lu_x1.value=n,""==n)return alert("抽獎欄格式錯誤"),void e.lu_x1.focus();1==confirm("確定開始進行抽獎嗎?")&&(bb=!1,window.setTimeout("lucky2()",3e3),window.setTimeout("Lottery()",10))}function hacker(){console.log("HAHA");for(var e=0;e<10;e++)alert("評哥大黑客！！！！！！")}function Lottery(){var e=document.form1;if(0==bb){var n=Math.floor(9998*Math.random()+1);e.lu_x2.value=n,T1=window.setTimeout("Lottery()",10)}}function lucky2(){bb=!0;var e=document.form1;e.lu_x2.value="";var n=e.lu_x1.value.trim(),t=/\ns*\n/g;n=n.replace(t,"\n"),""==n&&alert(0),e.lu_x1.value=n;var u=n.split("\n"),r=[];e.lu_c1.value=u.length;var l=parseInt(e.lu_c1.value),o=parseInt(e.lu_c2.value),a=Math.min(l,o);Math.seedrandom();for(var c=0;c<a;c++){var i=sp_random(0,l-c-1);r.push(u.splice(i,1))}var m="";for(c=0;c<a;c++)m+=r[c]+"\n";e.lu_x2.value=m;var v="本次抽獎人數："+l+"名，預計抽出："+o+"名，實際抽出："+a+"名。 ";document.getElementById("msg2").innerHTML=v}function note_toggle(){var e=document.getElementById("note").style.display;document.getElementById("note").style.display="none"==e?"":"none"}var T1;String.prototype.trim=function(){return this.replace(/(^s*)|(s*$)/g,"")};var bb=!1;$(document).keyup(function(e){e.ctrlKey&&32===e.keyCode&&(e.preventDefault(),lucky())})</script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script></div></body>'
    );
    $("body").prepend(
        '<p id="hacker" class="right" style="width: 3000px;">&#35413;&#21733;&#22823;&#40657;&#23458;&#65281;&#65281;&#65281;&#65281;&#65281;</p>'
    );
    setTimeout(gooo, 10000);
})();
