window.onload = function () {
    var oImg = document.getElementsByTagName('img');
    var oLi = document.getElementsByTagName('li');
    var oA = document.getElementsByTagName('a');
    var num = 0;
    var timer = null
    // console.log(oLi)
    oA[1].onclick = function () {
        num++;
        if (num > 4) num = 0;
        for (var i = 0; i < oImg.length; i++) {
            oImg[i].className = 'hidden';
            oLi[i].className = '';
        }
        oImg[num].className = 'block'
        oLi[num].className = 'active';
    }
    //右
    oA[0].onclick = function () {
        num--;
        if (num < 0) num = 4;
        for (var i = 0; i < oImg.length; i++) {
            oImg[i].className = 'hidden';
            oLi[i].className = '';
        }
        oImg[num].className = 'block'
        oLi[num].className = 'active';
    }
    //左
       
        timer = setInterval(oA[1].onclick,1500);
    
    for(var i = 0; i < oImg.length; i++){
        oImg[i].onmouseover = function(){
            clearInterval(timer);
        }
        oImg[i].onmouseout = timer;
    }

    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function () {
            for (var i = 0; i < oLi.length; i++) {
                oLi[i].className = '';
                oImg[i].className = 'hidden';
            }
            this.className = 'active';
            oImg[this.index].className = 'block';
            num = this.index;
        }


    }
}

