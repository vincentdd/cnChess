//soldierArr
let dataSet = [{
    name: "rook",
    str: "車",
    color: "black",
    posX: 450,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "rook",
    str: "車",
    color: "black",
    posX: 50,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "knight",
    str: "馬",
    color: "black",
    posX: 100,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "knight",
    str: "馬",
    color: "black",
    posX: 400,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "cannon",
    str: "砲",
    color: "black",
    posX: 100,
    posY: 150,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "cannon",
    str: "砲",
    color: "black",
    posX: 400,
    posY: 150,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "bishop",
    str: "象",
    color: "black",
    posX: 150,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "bishop",
    str: "象",
    color: "black",
    posX: 350,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "guard",
    str: "士",
    color: "black",
    posX: 200,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "guard",
    str: "士",
    color: "black",
    posX: 300,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "king",
    str: "将",
    color: "black",
    posX: 250,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "卒",
    color: "black",
    posX: 50,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "卒",
    color: "black",
    posX: 150,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "卒",
    color: "black",
    posX: 250,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "卒",
    color: "black",
    posX: 350,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "卒",
    color: "black",
    posX: 450,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "rook",
    str: "俥",
    color: "red",
    posX: 450,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "rook",
    str: "俥",
    color: "red",
    posX: 50,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "knight",
    str: "傌",
    color: "red",
    posX: 100,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "knight",
    str: "傌",
    color: "red",
    posX: 400,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "cannon",
    str: "炮",
    color: "red",
    posX: 100,
    posY: 150,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "cannon",
    str: "炮",
    color: "red",
    posX: 400,
    posY: 150,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "bishop",
    str: "相",
    color: "red",
    posX: 150,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "bishop",
    str: "相",
    color: "red",
    posX: 350,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "guard",
    str: "仕",
    color: "red",
    posX: 200,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "guard",
    str: "仕",
    color: "red",
    posX: 300,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "king",
    str: "帥",
    color: "red",
    posX: 250,
    posY: 50,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "兵",
    color: "red",
    posX: 50,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "兵",
    color: "red",
    posX: 150,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "兵",
    color: "red",
    posX: 250,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "兵",
    color: "red",
    posX: 350,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}, {
    name: "pawn",
    str: "兵",
    color: "red",
    posX: 450,
    posY: 200,
    offsetX: -9,
    offsetY: 6,
    radin: Math.PI,
    circleR: 17,
    fontSize: 20
}]


let soldierArr = [];

function inheritPrototype(subType, superType) {
    let prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

/*SuperSoldier.prototype = { //直向行走棋子（車、炮、将、卒）的父类，定义此类棋子的移动方法
    constructor: SuperSoldier,
    forward: function(num) { //进、退
        this.posY += num;
    },
    transverse: function(num) { //平
        this.posX = num;
    }
}

RulesOfSoldier.prototype = { //兵、卒的父类，定义卒的行走规则
    rules: function(obj) {
        console.log(this.PosX);
    }
}

inheritPrototype(RulesOfSoldier, SuperSoldier); //从超类上继承行走方法
*/

function SuperSoldier() { //直向行走棋子（車、炮、将、卒）的父类，定义此类棋子的移动方法
    this.forward = function(num) { //进、退
        this.posY += num;
    }
    this.transverse = function(num) { //平
        this.posX = num;
    }
}

function RulesOfSoldier() { //兵、卒的父类，定义卒的行走规则
    let temp;
    this.rules = function(obj) {
        console.log(obj.posY);
        if (obj.act === "transverse") {
            temp = Math.abs(this.posX - obj.step);
            if (this.posY < 250 || temp != 50)
                return false;
            else
                this.transverse.call(obj, obj.step);
        } else if (obj.act === "forward") {
            if (obj.step != 50 || obj.posY === "-")
                return false;
            else
                this.forward.call(obj, obj.step);
        }
        //if((this.posY < 250 && obj.act != "forward") || obj.posY === "-")
        console.log(obj.posY);
        return true;
    }
}

RulesOfSoldier.prototype = new SuperSoldier();
/*设置读写器
SuperSoldier.prototype.bindData = function(key, val) {
    Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        set: function(newVal) {
            console.log('你设置了' + key);
            console.log('新的' + key + ' = ' + newVal);
            val = newVal
            console.log(this);
            objCanvas.painting();
        }
    })
}*/

function SubSoldier(soldierObj) { //棋子对象构造函数
    let val;
    for (let key in soldierObj) {
        val = soldierObj[key]
        this[key] = val;
    }
}

function loopSoldierArr(dataSet) { //遍历dataset初始化对象列表
    let temp,
        obj;

    for (let i = 0; i < dataSet.length; i++) {
        obj = dataSet[i];
        if (obj.name === "pawn")
            SubSoldier.prototype = new RulesOfSoldier();
        temp = new SubSoldier(obj);
        //inheritPrototype(SubSoldier, RulesOfSoldier);
        /*if (temp.name === "pawn") {
            temp.__proto__ = new RulesOfSoldier();//SubSoldier实例的原型指向RulesOfSoldier实例
            //console.log(temp.rules());
        }*/
        soldierArr.push(temp);
    }
}

let gameManager = {
    objStep: {
        "一": 50,
        "二": 100,
        "三": 150,
        "四": 200,
        "五": 250,
        "六": 300,
        "七": 350,
        "八": 400,
        "九": 450
    },
    objBehave: {
        "进": "forward",
        "退": "forward",
        "平": "transverse",
    },
    objName: {
        "俥": "rook",
        "車": "rook",
        "车": "rook",
        "马": "knight",
        "馬": "knight",
        "傌": "knight",
        "炮": "cannon",
        "砲": "cannon",
        "将": "king",
        "帅": "king",
        "帥": "king",
        "士": "guard",
        "仕": "guard",
        "相": "bishop",
        "象": "bishop",
        "兵": "pawn",
        "卒": "pawn",
    },
    index: 0,
    name: "",
    color: "",
    //atPosX: "",
    posX: "",
    posY: "",
    act: "",
    step: "",
    history: [],
    init: function() {
        this.getOrder();
    },
    getOrder: function() {
        let _that = this,
            str = "",
            temp = [],
            reg = /\s/g,
            obj;
        $("#order").keydown(function(event) {
            if (event.which === 13) {
                str = $("#order").val().replace(reg, "");
                $("#order").val("");
                temp = str.split("");
                obj = _that.handleOrder(temp);
                if (obj) {
                    console.log(obj);
                    obj.rules(_that);
                    _that.history.push(soldierArr); //添加当前的棋子列表到历史记录
                    objCanvas.painting();
                    console.log(obj);
                } else
                    console.log("错误的命令！");
            }
        });
    },
    handleOrder: function(arr) { //处理输入命令
        let reg = /(\u524d)|(\u540e)/,
            temp,
            val,
            result;
        switch (arr.length) {
            case 5:
                arr[0].match(reg) != null ? temp = arr.shift() : this.flag = false; //console.log(arr.shift());
                temp === "前" ? this.index = 1 : this.index = 0; //保存前后参数到index，后续会将匹配元素存入一个最大长度为2的数组
            case 4:
                console.log(arr);
                this.name = this.objName[arr[0]];
                this.posX /*atPosX*/ = this.objStep[arr[1]];
                this.act = this.objBehave[arr[2]];
                this.history.length % 2 === 0 ? this.color = "red" : this.color = "black"; //根据历史步数来判断当前移动的棋子颜色
                if (arr[2] === "退") {
                    val = "-";
                } else if (arr[2] === "平" || arr[2] === "进")
                    val = "";
                if (this.name === undefined || this.posX /*atPosX*/ === undefined || this.act === undefined || this.step === undefined)
                    result = false;
                val += this.objStep[arr[3]];
                this.step = parseInt(val);
                result = this.pickUpChessman(soldierArr);
                this.posY = result.posY;
                console.log(this);
                break;
            default:
                result = false;
        }
        return result;
    },
    pickUpChessman: function(arr) { //根据命令寻找棋子，返回soldierArr中的棋子对象或者false
        let temp = [],
            result;
        for (var i = 0; i < arr.length; i++) {
            if (this.name === arr[i].name && this.posX /*atPosX*/ === arr[i].posX && this.color === arr[i].color) {
                temp.push(arr[i]); //将匹配对象入栈
            }
        }
        temp.sort(function(a, b) { //根据Y坐标排序
            a.posY - b.posY;
        });
        result = temp[this.index]; //根据index参数取匹配对象
        this.index = 0;
        return result;
    }
}

let objCanvas = {
    order: [],
    //对象初始化
    init: function() {
        this.painting();
    },
    //绘制画布
    painting: function() {
        //棋盘外框
        let canvas = document.getElementById("canvas"),
            startX = canvas.width / 2,
            startY = canvas.height / 2,
            randia = Math.PI / 2;
        this.ctx = canvas.getContext("2d");
        this.ctx.clearRect(0, 0, 500, 550);
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(50, 50, 400, 450);
        this.row();
        this.cols();
        this.drawFont("楚", 30, "red", startX, startY, randia, -15, -120);
        this.drawFont("河", 30, "red", startX, startY, randia, -15, -60);
        randia = -Math.PI / 2;
        this.drawFont("汉", 30, "red", startX, startY, randia, -15, -120);
        this.drawFont("界", 30, "red", startX, startY, randia, -15, -60);
        //原点中心为（0,0）,开始绘制棋盘坐标
        this.center(100, 150);
        this.center(400, 150);
        this.center(50, 200);
        this.center(150, 200);
        this.center(250, 200);
        this.center(350, 200);
        this.center(450, 200);
        this.center(450, 350);
        this.center(350, 350);
        this.center(250, 350);
        this.center(150, 350);
        this.center(50, 350);
        this.center(400, 400);
        this.center(100, 400);
        //开始绘制棋子
        this.loopArr(soldierArr);
    },
    loopArr: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            this.soldierDrawing(arr[i]);
        }
    },
    soldierDrawing: function(obj) {
        let radian = (obj.color == "red") ? Math.PI : 0;

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#d1923f";
        this.ctx.fillStyle = "#d1923f";

        this.ctx.save(); //保存点
        this.ctx.translate(canvas.width / 2, canvas.height / 2); //将坐标中心作为原点
        this.ctx.rotate(radian); //绘制红方棋子需要将棋盘中心旋转180度，使用（0,0）为原点的坐标系
        this.ctx.translate(canvas.width / -2, canvas.height / -2); //将（0,0）作为原点
        this.ctx.arc(obj.posX, obj.posY, obj.circleR, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.drawFont(obj.str, obj.fontSize, obj.color, obj.posX, obj.posY, obj.radin, obj.offsetX, obj.offsetY);
        this.ctx.restore(); //恢复到保存点
        this.ctx.strokeStyle = "#000000";
    },
    //画棋盘线方法
    lineDrawing: function(mx, my, lx, ly) {
        this.ctx.beginPath();
        this.ctx.moveTo(mx, my);
        this.ctx.lineTo(lx, ly);
        this.ctx.stroke();
    },
    //棋盘行
    row: function() {
        for (var i = 100; i <= 450; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(50, i);
            this.ctx.lineTo(450, i);
            this.ctx.stroke();
        }
    },
    //棋盘列
    cols: function() {
        for (var i = 100; i <= 400; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, 50);
            this.ctx.lineTo(i, 500);
            this.ctx.stroke();
        }
        //清除指定的矩形区域
        //this.ctx.clearRect(5, 402,795, 95);
        this.ctx.clearRect(52, 252, 396, 46);
        //斜线
        this.lineDrawing(200, 50, 300, 150);
        this.lineDrawing(200, 400, 300, 500);
        //反斜线
        this.lineDrawing(300, 50, 200, 150);
        this.lineDrawing(300, 400, 200, 500);
    },
    //坐标的中心点
    center: function(x, y) {
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "#000000";
        //处理四个边界坐标
        if (x - 5 > 50) {
            this.lineDrawing(x - 5, y - 15, x - 5, y - 5); //左上...-
            this.lineDrawing(x - 5, y - 5, x - 15, y - 5); //左上..
            this.lineDrawing(x - 5, y + 15, x - 5, y + 5); //左下-.
            this.lineDrawing(x - 5, y + 5, x - 15, y + 5); //左下-.-.
        }
        if (x + 5 < 450) {
            this.lineDrawing(x + 5, y - 15, x + 5, y - 5); //右上.
            this.lineDrawing(x + 5, y - 5, x + 15, y - 5); //右上-..
            this.lineDrawing(x + 5, y + 15, x + 5, y + 5); //右下-..
            this.lineDrawing(x + 5, y + 5, x + 15, y + 5); //右下
        }
    },
    drawFont: function(str, fontSize, color, startX, startY, radian, offsetX, offsetY) {
        this.ctx.lineWidth = 1;
        this.ctx.fillStyle = color;
        this.ctx.font = fontSize + "px microsoft yahei";
        this.ctx.save(); //保存点
        this.ctx.translate(startX, startY);
        this.ctx.rotate(radian); //字符方向
        this.ctx.fillText(str, offsetX, offsetY);
        this.ctx.restore(); //恢复到保存点
    }

    /*,
        bindDOM: function() {
        	$(document).keydown(function(e){
        		let evt = e.srcElement || e.target; // 获取触发事件的源对象
        		if(evt.keyCode === 13)
        			this.getOrder();
        	});
        }*/
};

loopSoldierArr(dataSet);
objCanvas.init();
gameManager.init();
(function() {
    for (let i = 0; i < soldierArr.length; i++) {}
})()
