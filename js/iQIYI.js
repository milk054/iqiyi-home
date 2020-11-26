//改变与恢复搜索栏鼠标移入与移出的颜色
function changeColor(){
    var input = document.getElementsByTagName('input')[0];
    var hotSearch = input.nextElementSibling;
    //为input和a标签添加鼠标移入事件，移入时改变颜色
    input.addEventListener('mouseover',changeBackground,false);
    hotSearch.addEventListener('mouseover',changeBackground,false);
    function changeBackground(){
        input.style.backgroundColor = "#444";//input背景颜色
        input.style.color = "#ccc";//input字体颜色
        input.style.transition = "background-color .2s";//input背景颜色过渡所需时间
        hotSearch.style.backgroundColor = "#444";
        hotSearch.style.transition = "background-color .2s";

    }
    //为input和a标签添加鼠标移出事件，移出时恢复背景颜色
    input.addEventListener('mouseout',recoverBackground,false);
    hotSearch.addEventListener('mouseout',recoverBackground,false);
    function recoverBackground(){
        input.style.backgroundColor = '#333';
        input.style.color = '#999';
        hotSearch.style.backgroundColor = '#333';
    }
}
changeColor();

//导航栏里的通知下拉菜单的选择动态
function select(){
    var options = document.getElementsByClassName('option');
    var lines = document.getElementsByTagName('em');
    for(var i = 0; i < options.length; i ++){
        (function(i){
            options[i].onmouseover = function(){
                for(var j = 0; j < options.length; j ++){
                    options[j].firstElementChild.style.color = '#222';
                    lines[j].style.display = 'none';
                }
                options[i].firstElementChild.style.color = '#00be06';
                lines[i].style.display = 'inline-block';
            }
        }(i))
    }
}
select();

//导航栏里看过的下拉菜单里的打对勾
function filterShortVideo(){
    var i = document.getElementsByClassName('short-video')[0].firstElementChild;
    var p = document.getElementsByTagName('div')[42].children[2];
    var p1 = document.getElementsByTagName('div')[42].children[3];
    var count = 0;
    i.addEventListener('mousedown',go,false);
    function go(){
        i.className = '';
        p.style.display = 'none';
        p1.style.display = 'none';
        if(count % 2 == 0){
            i.className = 'none';
            p1.style.display = 'block';
        }else{
            i.className = 'true';
            p.style.display = 'block';
        }
        count ++;
    }
}
filterShortVideo();

//轮播图 + 选项卡
function rotation(){
    var li = document.getElementsByTagName('li');
    var img = document.getElementsByTagName('img');
    var timer = setInterval(go,3000);
    var count = 0;
    //图片轮播
    function go(){
        for(var i = 0; i < li.length; i ++){
            img[i + 2].style.display = 'none';
            li[i].className = '';
            for(var j = 0; j < li[i].children.length; j ++){
                li[i].children[j].className = '';
            }
        }
        img[count + 2].style.display = 'inline-block';
        li[count].className = 'selected';
        li[count].children[0].className = 'content1';
        li[count].children[1].className = 'content2';
        li[count].children[2].className = 'content3';
        count++;
        if(count == 10){
            count = 0;
        }
    }
    //选项卡
    for(var i = 0; i < li.length; i ++){
        (function(i){
            li[i].addEventListener('mouseover',check,false);
            li[i].addEventListener('mouseout',recoverGo,false);
            function check(){
                clearInterval(timer);
                for(var j = 0; j < li.length; j ++){
                    li[j].className = '';
                    for(var n = 0; n < li[j].children.length; n ++){
                        li[j].children[n].className = '';
                    }
                    img[j + 2].style.display = 'none';
                }
                this.className = 'selected';
                this.children[0].className = 'content1';
                this.children[1].className = 'content2';
                this.children[2].className = 'content3';
                img[i + 2].style.display = 'inline-block';
            }
            function recoverGo(){
                timer = setInterval(go,3000);
            }
        }(i))
    }
}
rotation();