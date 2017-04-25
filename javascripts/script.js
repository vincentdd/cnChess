let soldierArr = [],
    dataSet = [{
        name: "rook",
        str: "車",
        color: 1, //0和1分别表示红色黑色，方便选择棋子时互相转化
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 1,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
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
        color: 0,
        posX: 450,
        posY: 200,
        offsetX: -9,
        offsetY: 6,
        radin: Math.PI,
        circleR: 17,
        fontSize: 20
    }]

function inheritPrototype(subType, superType) {
    let prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

/*

inheritPrototype(RulesOfSoldier, SuperSoldier); //从超类上继承行走方法
*/
function SuperKnight() { //斜向行走棋子（马、象、士）的父类，定义此类棋子的移动方法
    this.forward = function(num) { //进、退
        this.posY += num;
    }
}

function SuperSoldier() { //直向行走棋子（車、炮、将、卒）的父类，定义此类棋子的移动方法
    let _that = this;
    this.forward = function(num) { //进、退
        this.posY += num;
    }
    this.transverse = function(num) { //平
            this.posX = num;
        }
        /**********************************************
        move方法用来移动棋子，当校验目标坐标上是否为空\
        存在同色棋子\存在异色棋子时，gameManager对象从
        SuperSoldier上继承这个方法,并将坐标保存在
        gameManager.posX、gameManager.posY两个属相上
        **********************************************/
    this.move = function() {
        gameManager.act === "forward" ? _that.forward.call(this, gameManager.step) : _that.transverse.call(this, gameManager.step);
    }
    this.isRoadClear = function(startX, startY, endX, endY) { //检测直线移动路径上是否存在棋子，并返回数量
        let max,
            min,
            X,
            Y,
            count = 0;
        if (startX === endX) {
            min = Math.min(startY, endY);
            max = Math.max(startY, endY);
            for (let i = 0, len = soldierArr.length; i < len; i++) {
                if (soldierArr[i].color === gameManager.color) { //根据棋子颜色转换坐标值
                    X = soldierArr[i].posX;
                    Y = soldierArr[i].posY;
                } else {
                    X = 500 - soldierArr[i].posX;
                    Y = 550 - soldierArr[i].posY;
                }
                if (X === startX && Y > min && Y < max)
                    count += 1;
            }
        } else {
            min = Math.min(startX, endX);
            max = Math.max(startX, endX);
            for (let i = 0, len = soldierArr.length; i < len; i++) {
                if (soldierArr[i].color === gameManager.color) { //根据棋子颜色转换坐标值
                    X = soldierArr[i].posX;
                    Y = soldierArr[i].posY;
                } else {
                    X = 500 - soldierArr[i].posX;
                    Y = 550 - soldierArr[i].posY;
                }
                if (Y === startY && X > min && X < max)
                    count += 1;
            }
        }
        return count;
    }
}

function RulesOfKing() {
    let targetPosition,
        sum;

    this.rules = function() {
        this.move.call(gameManager);
        targetPosition = gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        sum = Math.abs(gameManager.posX + gameManager.posY - this.posX - this.posY);
        if (gameManager.posX < 400 || gameManager.posX > 500 || gameManager.posY < 50 || gameManager.posY > 150)
            return false;
        if (sum === 50 && targetPosition != false)
            return true;
    }
}

function RulesOfCannon() {
    let chessmanOnTheRoad,
        targetPosition;

    this.rules = function() {
        this.move.call(gameManager);
        chessmanOnTheRoad = this.isRoadClear(this.posX, this.posY, gameManager.posX, gameManager.posY);
        targetPosition = gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        console.log(targetPosition);
        if (typeof targetPosition === "boolean" && targetPosition === true && chessmanOnTheRoad === 0)
            return targetPosition;
        if (typeof targetPosition != "boolean" && chessmanOnTheRoad === 1)
            return targetPosition;
        else
            return false;
    }
}

function RulesOfRook() { //車、车的父类，定义車的行走规则
    let result;
    this.rules = function() {
        this.move.call(gameManager);
        this.isRoadClear(this.posX, this.posX, gameManager.posX, gameManager.posY) === 0 ? result = true : result = false;
        if (result)
            return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
    }
}

function RulesOfSoldier() { //兵、卒的父类，定义卒的行走规则
    let temp;
    this.rules = function(obj) {
        if (obj.act === "transverse") {
            temp = Math.abs(this.posX - obj.step); //步长
            if (this.posY < 300 || temp != 50)
                return false;
        } else if (obj.act === "forward") {
            if (obj.step != 50 || obj.posY === "-")
                return false;
        }
        this.move.call(gameManager);
        return obj.checkPoint(obj.posX, obj.posY, obj.color);
    }
}

RulesOfSoldier.prototype = new SuperSoldier();
RulesOfRook.prototype = new SuperSoldier();
RulesOfCannon.prototype = new SuperSoldier();
RulesOfKing.prototype = new SuperSoldier();
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
        switch (obj.name) {
            case "pawn":
                SubSoldier.prototype = new RulesOfSoldier();
                break;
            case "rook":
                SubSoldier.prototype = new RulesOfRook();
                break;
            case "cannon":
                SubSoldier.prototype = new RulesOfCannon();
                break;
            case "king":
                SubSoldier.prototype = new RulesOfKing();
                break;
        }
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
    index: 0, //存储命令中的前、后，当同一posX坐标上有两颗同色棋子时，根据命令遍历会得到一个长度为二的棋子数组，根据index值来筛选棋子
    name: "",
    color: 0, //0表示红色，1表示黑色
    count: 0, //步数游标，当返回查看历史记录时，将根据此游标来判断插入新记录的位置
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
            obj,
            result;
        $("#order").keydown(function(event) {
            if (event.which === 13) {
                str = $("#order").val().replace(reg, "");
                $("#order").val("");
                temp = str.split("");
                obj = _that.handleOrder(temp);
                obj === undefined ? result = false : result = obj.rules(_that);
                console.log("即将移动到： " + _that.posX + " , " + _that.posY);
                if (result != false) {
                    console.log("目标位置检测：" + result);
                    if (typeof result === "number")
                        _that.dead(result);
                    obj.move();
                    _that.addHistroy(soldierArr); //添加当前的棋子列表到历史记录
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
                this.name = this.objName[arr[0]]; //获取命令中的棋子名称
                this.posX /*atPosX*/ = this.objStep[arr[1]]; //获取命令中的X轴位置
                this.act = this.objBehave[arr[2]]; //获取命令动作（进、退、平）
                this.color = this.history.length % 2; //根据历史步数来判断当前移动的棋子颜色
                if (arr[2] === "退") {
                    val = "-";
                } else if (arr[2] === "平" || arr[2] === "进")
                    val = "";
                if (this.name === undefined || this.posX /*atPosX*/ === undefined || this.act === undefined || this.step === undefined) {
                    result = undefined;
                    break;
                }
                val += this.objStep[arr[3]];
                this.step = parseInt(val);
                result = this.pickUpChessman(soldierArr);
                if (result === undefined)
                    break;
                console.log("当前选中棋子：" + result.color + " , " + result.posX + " , " + result.posY);
                this.posY = result.posY; //存在棋子时保存当前选中棋子的Y坐标
                console.log(this);
                break;
            default:
                result = undefined;
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
    },
    checkPoint: function(X, Y, color) {
        let result,
            difColorPosX = 500 - X, //转换坐标到异颜色棋子坐标系
            difColorPosY = 550 - Y;
        //console.log(difColorPosX + " , " + difColorPosY);
        if (X < 50 || X > 450 || Y < 50 || Y > 500)
            return false;
        for (let i = 0, len = soldierArr.length; i < len; i++) {
            if (soldierArr[i].posX === difColorPosX && soldierArr[i].posY === difColorPosY && soldierArr[i].color != color) {
                result = i;
                break;
            } else if (soldierArr[i].posX === X && soldierArr[i].posY === Y && soldierArr[i].color === color) {
                result = false;
                break;
            } else
                result = true;
        }
        return result;
    },
    addHistroy: function(arr) { //将当前的棋子列表添加到histroy属性
        let temp,
            len = this.history.length;
        if (this.count === len) { //当游标位置在数组末尾时，直接添加
            this.history.push(arr);
        } else { //当游标位置在数组中间时，删除位于游标之后的部分并添加当前最新的棋子
            temp = len - this.count;
            this.history.splice(this.count, temp, arr);
        }
        objCanvas.painting();
        this.count += 1;
    },
    dead: function(num) {
        soldierArr.splice(num, 1);
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
        let canvas = document.getElementById("canvas"),
            startX = canvas.width / 2,
            startY = canvas.height / 2,
            randia = Math.PI / 2;
        this.ctx = canvas.getContext("2d");
        //棋盘外框
        this.ctx.clearRect(0, 0, 500, 550);
        this.ctx.strokeStyle = "#000000";
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
        let radian = (obj.color === 0) ? Math.PI : 0,
            color = (obj.color === 0) ? "red" : "black";

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
        this.drawFont(obj.str, obj.fontSize, color, obj.posX, obj.posY, obj.radin, obj.offsetX, obj.offsetY);
        this.ctx.restore(); //恢复到保存点
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
            this.lineDrawing(50, i, 450, i);
            /*this.ctx.beginPath();
            this.ctx.moveTo(50, i);
            this.ctx.lineTo(450, i);
            this.ctx.stroke();*/
        }
    },
    //棋盘列
    cols: function() {
        for (var i = 100; i <= 400; i += 50) {
            this.lineDrawing(i, 50, i, 500);
            /*this.ctx.beginPath();
            this.ctx.moveTo(i, 50);
            this.ctx.lineTo(i, 500);
            this.ctx.stroke();*/
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
    //十字坐标
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
