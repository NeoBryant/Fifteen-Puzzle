window.onload = function() {
    create_pic();
    document.getElementById("restart").addEventListener("click", random_pos);
};

/* 
    检查产生的随机数列是否是合理的，因为有可能出现恢复不到原图的情况 
    参考研究：http://blog.csdn.net/mindhawk/article/details/1445013
*/
function check_random_isValid() {
    var count = 0;
    for (var i = 0; i < 16; i++) {
        for (var j = i+1; j < 16; j++) {
            if (random_arr[j] < random_arr[i]) {
                count++;
            }
        }
    }
    return count%2==0;
}

/* 产生拼图 */
function create_pic() {
    picture = document.getElementById("picture");
    for (var i = 1; i <= 16; i++) {
        var part = document.createElement("div");
        part.addEventListener("click", pic_move);
        part.className = "picture_part" + " position_"+i + " picture_part";
        picture.appendChild(part);
        part.id = "_position_"+i;
    }
}

/* 产生随机数列定义位置 */
function random_pos(event) {
    document.getElementById("result").textContent = "游戏开始！";
    /* 产生随机数列前先将拼图块对应的位置复位 */
    for (var i = 1; i <= 16; i++) {
        document.getElementById("_position_"+i).className="picture_part"+" position_"+i;
    }
    var part = document.getElementById("picture").childNodes;
    random_arr = [];
    for (var j = 0; j < 15; j++) {
        random_arr[j] = j+1;
    }
    /* 利用sort和cmp进行随机打散 */
    function cmp() { 
        return Math.random()-0.5; 
    }
    while(1) {
        random_arr.sort(cmp);
        if (check_random_isValid()) {
            break;
        }
    }
    /* 通过更改类名来改变位置 */
    for (var i = 0; i < 15; i++) {
        part[i].className = "picture_part" + " position_" + random_arr[i];
    }
}

/* 点击图片触发的事件处理器 */
function pic_move(event) {
    var blank_pic_offset = document.getElementById("_position_16");
    var blank_pic_offset_top = blank_pic_offset.offsetTop;
    var blank_pic_offset_left = blank_pic_offset.offsetLeft;
    var _offset_top = this.offsetTop;
    var _offset_left = this.offsetLeft;
    /* 判断点击的图片块是否与空格块相邻 */
    if ((Math.abs(blank_pic_offset_top-_offset_top) == 89 && blank_pic_offset_left == _offset_left) ||
        (Math.abs(blank_pic_offset_left-_offset_left) == 89 && blank_pic_offset_top == _offset_top)) {
        var str = blank_pic_offset.className;
        blank_pic_offset.className = this.className;
        this.className = str;
        check(); // 检查是否还原原图
        ++step; //如果移动了方块，则步数加一
    }
}

var step = 1; /* 所用步数 */
/* 检查是否还原原图 */
function check() {
    for (var i = 1; i <= 16; i++) {
        var item = document.getElementById("_position_"+i);
        if (item.className != "picture_part" +" position_"+i + " picture_part" &&
            item.className != "picture_part" + " position_" + i + " picture_part1") {
            document.getElementById("result").textContent = " 已用步数:"+step;
            return;
        }
    }
    document.getElementById("result").textContent = "恭喜你，拼图完成！"+" 共用步数:"+step;
    step = 0;
}