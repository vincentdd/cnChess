(function() {
    let soldierArr = [],
        dataSet = [{
            name: "rook",
            str: "車",
            color: 0, //0和1分别表示红色黑色，方便选择棋子时互相转化
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
            str: "馬",
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
            str: "馬",
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
            str: "砲",
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
            str: "砲",
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
            str: "象",
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
            str: "象",
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
            str: "士",
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
            str: "士",
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
            str: "将",
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
            str: "卒",
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
            str: "卒",
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
            str: "卒",
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
            str: "卒",
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
            str: "卒",
            color: 0,
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
            color: 1,
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
            str: "傌",
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
            str: "傌",
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
            str: "炮",
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
            str: "炮",
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
            str: "相",
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
            str: "相",
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
            str: "仕",
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
            str: "仕",
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
            str: "帥",
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
            str: "兵",
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
            str: "兵",
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
            str: "兵",
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
            str: "兵",
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
            str: "兵",
            color: 1,
            posX: 450,
            posY: 200,
            offsetX: -9,
            offsetY: 6,
            radin: Math.PI,
            circleR: 17,
            fontSize: 20
        }]
        /*
        function inheritPrototype(subType, superType) {
            let prototype = Object(superType.prototype);
            prototype.constructor = subType;
            subType.prototype = prototype;
        }

        inheritPrototype(RulesOfSoldier, SuperSoldier); //从超类上继承行走方法
        */
        //斜向行走棋子（马、象、士）的父类，定义此类棋子的移动方法
    function SuperKnight() {
        this.move = function() {
                this.posX = gameManager.posX;
                this.posY = gameManager.posY;
            }
            //马、象、士没有平命令
        this.checkOrder = function() {
                if (gameManager.act === "transverse")
                    return false;
                else
                    return true;
            }
            //士、象的计算目标坐标方法，Knight对象继承此实例是，自身所有的同名方法会覆盖此方法
        this.getPoint = function(num) {
                let temp = gameManager.step,
                    sign = "";

                sign = this.toStringWithSign(temp);
                gameManager.posX = parseInt(temp);
                gameManager.posY += parseInt(sign[0] + num);
            }
            //number转带符号string
        this.toStringWithSign = function(num) {
                let str = ""; //初始化空字符串
                num > 0 ? str = "+" : str = "-"; //判断字符串符号
                str += Math.abs(num); //符号 + 绝对值
                return str; //返回带符号string
            }
            //校验马脚，象眼，马脚、象眼的检测共同点是棋子移动方向上，长、短轴方向各减一格，即为校验点，
            //以上检测思路的一个问题是X、Y坐标可能要各自加减相应的步长来表示棋子的移动，所以这个方法会将
            //两个坐标轴方向上的变化量存入一个数组，再将数组内的两个带符号Number类型值转化成带符号String
            //类型，然后将数值绝对值分别减去一个步长，再拼接上符号、转化成Number类型，将原坐标分别加上这
            //个值，得到的既是象眼、马脚坐标
        this.isViable = function() {
            let feetPosX = this.posX,
                feetPosY = this.posY,
                result,
                _that = this,
                arr = [];

            arr.push(gameManager.posX - this.posX);
            arr.push(gameManager.posY - this.posY);

            let roots = arr.map(function(x) {
                let temp = _that.toStringWithSign(x); //获取x的带符号string格式
                temp = parseInt(temp[0] + (Math.abs(temp) - 50)); //temp = x绝对值 - 50
                return temp;
            });

            feetPosX += roots[0];
            feetPosY += roots[1];
            result = gameManager.checkPoint(feetPosX, feetPosY, this.color);
            if (result === true)
                return true;
            else
                return false;
        }
    }
    //直向行走棋子（車、炮、将、卒）的父类，定义此类棋子的移动方法
    function SuperSoldier() {
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
            //检测直线移动路径上是否存在棋子，并返回数量。水平移动和竖直移动分别需要检验X轴坐标和Y轴坐标相等的情况，暂时没有想到更好的实现方式，这里应该还有优化的空间，以后补
        this.isRoadClear = function(startX, startY, endX, endY) {
            let max,
                min,
                X,
                Y,
                count = 0;
            if (startX === endX) { //竖直移动
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
            } else { //水平移动
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
    //士规则，主要是士的命令、移动范围判定
    function RulesOfGuard() {
        this.rules = function() {
            let step = 50;
            if (!this.checkOrder()) //检测命令是否为平
                return false;
            this.getPoint(step);
            if (gameManager.posX < 200 || gameManager.posX > 300 || gameManager.posY < 50 || gameManager.posY > 150)
                return false;
            return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        }
    }
    //象移动规则
    function RulesOfBishop() {
        this.rules = function() {
            let feetPosition,
                targetPosition,
                step = 100;

            if (!this.checkOrder()) //检测命令是否为平
                return false;
            this.getPoint(step);
            if (gameManager.posX - this.posX != 100 || gameManager.posY > 250)
                return false;
            feetPosition = this.isViable(); //检查象眼位置
            if (!feetPosition)
                return false;
            return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        }
    }
    //马移动规则
    function RulesOfKnight() {
        this.getPoint = function() {
            let X = gameManager.posX,
                stepX = Math.abs(gameManager.step),
                stepY = "",
                temp = Math.abs(X - stepX);

            if (!this.checkOrder()) //检测命令是否为平
                return false;
            gameManager.step > 0 ? stepY += "+" : stepY += "-";
            temp === 50 ? stepY += 100 : stepY += 50;
            gameManager.posX = stepX;
            gameManager.posY += parseInt(stepY);
        }
        this.rules = function() {
            let feetPosition, targetPosition;
            /*if (!this.getPoint()) //校验步长是否符合规则
                return false;*/
            this.getPoint();
            if (Math.abs(gameManager.posX - this.posX) != 50 && Math.abs(gameManager.posX - this.posX != 100))
                return false;
            feetPosition = this.isViable();
            if (!feetPosition) //检查马脚
                return false;
            return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        }
    }
    //将移动规则
    function RulesOfKing() {
        let targetPosition,
            sum;

        this.rules = function() {
            this.move.call(gameManager);
            targetPosition = gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
            sum = Math.abs(gameManager.posX + gameManager.posY - this.posX - this.posY); //步长
            if (gameManager.posX < 200 || gameManager.posX > 300 || gameManager.posY < 50 || gameManager.posY > 150)
                return false;
            if (sum != 50 || targetPosition === false)
                return false;
            else
                return true;
        }
    }

    function RulesOfCannon() { //炮的父类，定义炮的行走规则
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
            this.isRoadClear(this.posX, this.posY, gameManager.posX, gameManager.posY) === 0 ? result = true : result = false;
            if (result)
                return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
            else
                return result;
        }
    }

    function RulesOfSoldier() { //兵、卒的父类，定义卒的行走规则
        let temp;
        this.rules = function() {
            if (gameManager.act === "transverse") {
                temp = Math.abs(this.posX - gameManager.step); //步长
                if (this.posY < 300 || temp != 50)
                    return false;
            } else if (gameManager.act === "forward") {
                if (gameManager.step != 50 || gameManager.posY === "-")
                    return false;
            }
            this.move.call(gameManager);
            return gameManager.checkPoint(gameManager.posX, gameManager.posY, gameManager.color);
        }
    }

    RulesOfSoldier.prototype = new SuperSoldier();
    RulesOfRook.prototype = new SuperSoldier();
    RulesOfCannon.prototype = new SuperSoldier();
    RulesOfKing.prototype = new SuperSoldier();
    RulesOfKnight.prototype = new SuperKnight();
    RulesOfBishop.prototype = new SuperKnight();
    RulesOfGuard.prototype = new SuperKnight();
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
            val = soldierObj[key];
            this[key] = val;
        }
    }

    function loopSoldierArr(dataSet) { //遍历dataset初始化对象列表
        let temp,
            obj,
            protoSoldier = new RulesOfSoldier(),
            protoRook = new RulesOfRook(),
            protoCannon = new RulesOfCannon(),
            protoKing = new RulesOfKing(),
            protoKnight = new RulesOfKnight(),
            protoBishop = new RulesOfBishop(),
            protoGuard = new RulesOfGuard();

        for (let i = 0; i < dataSet.length; i++) {
            obj = dataSet[i];
            temp = new SubSoldier(obj);
            switch (obj.name) {
                case "pawn":
                    temp.__proto__ = protoSoldier;
                    break;
                case "rook":
                    temp.__proto__ = protoRook;
                    break;
                case "cannon":
                    temp.__proto__ = protoCannon;
                    break;
                case "king":
                    temp.__proto__ = protoKing;
                    break;
                case "knight":
                    temp.__proto__ = protoKnight;
                    break;
                case "bishop":
                    temp.__proto__ = protoBishop;
                    break;
                case "guard":
                    temp.__proto__ = protoGuard;
                    break;
            }

            soldierArr = soldierArr.concat(temp);
        }
    }

    let gameManager = {
        objStep: {
            "一1１": 50,
            "二2２": 100,
            "三3３": 150,
            "四4４": 200,
            "五5５": 250,
            "六6６": 300,
            "七7７": 350,
            "八8８": 400,
            "九9９": 450
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
        color: 1, //0表示红色，1表示黑色
        count: 0, //步数游标，当返回查看历史记录时，将根据此游标来判断插入新记录的位置
        posX: "",
        posY: "",
        act: "",
        step: 0,
        history: [],
        init: function() {
            this.bindDOM();
            this.addHistroy();
        },
        bindDOM: function() {
            let reg = /\s/g,
                str = "",
                temp;

            $("#order").keydown(function(event) {
                if (event.which === 13) {
                    str = $("#order").val().replace(reg, "");
                    $("#order").val("");
                    gameManager.getOrder(str);
                }
            });
            $(document).on("click", "button", function() {
                temp = $(this).attr("data-val");
                temp = parseInt(temp);
                gameManager.showHistroy(temp);
            })
            //$("#notice").
        },
        getOrder: function(str) {
            let _that = this,
                temp = [],
                obj,
                result;

            temp = str.split("");
            obj = _that.handleOrder(temp);
            obj === undefined ? result = false : result = obj.rules();
            console.log("即将移动到： " + _that.posX + " , " + _that.posY);
            if (result === false) {
                console.log("错误的命令！");
                $("#notice").show(300);
            } else {
                if (typeof result === "number")
                    _that.dead(result);
                obj.move();
                _that.addHistroy(); //添加当前的棋子列表到历史记录
                console.log(obj);
                $("#notice").hide(300);
            }
        },
        getStep: function(arr, str) {
            for (let key in arr) {
                if (key.indexOf(str) != -1)
                    return arr[key];
            }
        },
        handleOrder: function(arr) { //处理输入命令
            let reg = /(\u524d)|(\u540e)/,
                temp,
                val,
                valOfStep,
                result;
            switch (arr.length) {
                case 5:
                    arr[0].match(reg) != null ? temp = arr.shift() : this.flag = false; //console.log(arr.shift());
                    temp === "前" ? this.index = 1 : this.index = 0; //保存前后参数到index，后续会将匹配元素存入一个最大长度为2的数组
                case 4:
                    console.log(arr);
                    this.name = this.objName[arr[0]]; //获取命令中的棋子名称
                    /*Object.keys(this.objStep).filter(function(element) {
                        if (element.indexOf(arr[1]) != -1)
                            return gameManager.objStep[element];
                    });*/
                    this.posX = this.getStep(this.objStep, arr[1]); //获取命令中的X轴位置
                    this.act = this.objBehave[arr[2]]; //获取命令动作（进、退、平）
                    this.color = this.count % 2; //根据历史步数来判断当前移动的棋子颜色
                    if (arr[2] === "退") {
                        val = "-";
                    } else if (arr[2] === "平" || arr[2] === "进")
                        val = "";
                    if (this.name === undefined || this.posX === undefined || this.act === undefined || this.step === undefined) {
                        result = undefined;
                        break;
                    }
                    valOfStep = this.getStep(this.objStep, arr[3]);
                    if (valOfStep === undefined)
                        break;
                    val += valOfStep;
                    this.step = parseInt(val);
                    result = this.pickUpChessman(soldierArr);
                    if (result === undefined)
                        break;
                    console.log("当前选中棋子颜色：" + result.color + " , X坐标" + result.posX + " , Y坐标" + result.posY);
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
                if (this.name === arr[i].name && this.posX === arr[i].posX && this.color === arr[i].color) {
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
        addHistroy: function() { //将当前的棋子列表添加到histroy属性
            let temp,
                obj,
                arr = [],
                len = this.history.length;

            arr = soldierArr.map(function(x) {
                return gameManager.deepClone(x);
            });
            if (this.count === len) { //当游标位置在数组末尾时，直接添加
                this.history.push(arr);
            } else { //当游标位置在数组中间时，删除位于游标之后的部分并添加当前最新的棋子
                temp = len - this.count;
                this.history.splice(this.count, temp, arr);
            }
            objCanvas.painting(soldierArr);
            this.count += 1;
        },
        dead: function(num) {
            soldierArr.splice(num, 1);
        },
        showHistroy: function(num) {
            let temp = this.count + num,
                len = this.history.length,
                index;
            if ((temp === len && num > 0) || temp === 0) {
                return 0;
            } else {
                this.count += num;
                index = this.count - 1;
                soldierArr = gameManager.history[index];
                objCanvas.painting(soldierArr);
            }
        },
        deepClone: function(initalObj, finalObj) {
            let obj = finalObj || {};
            for (let i in initalObj) {
                let prop = initalObj[i];

                // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
                if (prop === obj) {
                    continue;
                }

                if (typeof prop === 'object') {
                    obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
                } else {
                    obj[i] = prop;
                }
            }
            return obj;
        },
        win: function() {

        }
    }

    let objCanvas = {
        /*对象初始化
        init: function() {
            this.painting(soldierArr);
        },*/
        //绘制画布
        painting: function(obj) {
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
            this.loopArr(obj);
        },
        //循环棋子队列
        loopArr: function(arr) {
            for (var i = 0; i < arr.length; i++) {
                this.soldierDrawing(arr[i]);
            }
        },
        //绘制棋子
        soldierDrawing: function(obj) {
            let radian = (obj.color === 1) ? Math.PI : 0,
                color = (obj.color === 1) ? "red" : "black";

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
            }
        },
        //棋盘列
        cols: function() {
            for (var i = 100; i <= 400; i += 50) {
                this.lineDrawing(i, 50, i, 500);
            }
            //清除指定的矩形区域
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
    };

    loopSoldierArr(dataSet);
    gameManager.init();
})()
