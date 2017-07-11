/**
 * Created by christine on 7/11/17.
 */
var inputArr = [
    ['张三','95','80','75','80'],
    ['李四','80','70','85','90']
]

//计算每个同学成绩平均分
function calcAver(inputArr) {
    var averScoreArr = [];
    for(let i = 0; i < inputArr.length; i++) {
        var score = 0;
        for(let j = 1; j < inputArr[i].length; j++) {
            score += parseInt(inputArr[i][j]);
        }
        averScoreArr[i] = score/(inputArr[i].length-1);
    }
    //console.log(typeof parseInt((inputArr[1][2])))
    return averScoreArr;
}
// 7min

//计算全班总平均分
function calcAverWhole(averScoreArr) {
    var wholeScore = 0;
    for(let i = 0; i < averScoreArr.length; i++){
        wholeScore += averScoreArr[i];
    }
    wholeScore = wholeScore/averScoreArr.length;
    return wholeScore;
}
// 5min

//计算每个同学总分
function calcPerWhole(inputArr) {
    var wholeScoreArr = [];
    for(let i = 0; i < inputArr.length; i++) {
        var score = 0;
        for(let j = 1; j < inputArr[i].length; j++) {
            score += parseInt(inputArr[i][j]);
        }
        wholeScoreArr[i] = score;
    }
    return wholeScoreArr;
}
// 3min

//计算全班总分中位数（排序，取中位数）
function calcMedian(wholeScoreArr) {
    var median = 0;
    var newArr = wholeScoreArr;
    let temp = 0;
    for(let i = 0; i < newArr.length; i++) {
        for(let j = i; j < newArr.length; j++){
            if(newArr[j] < newArr[i]){
                temp = newArr[j];
                newArr[j] = newArr[i];
                newArr[i] = temp;
            }
        }
    }
    if(newArr.length % 2 == 0)
        median = (newArr[newArr.length/2] + newArr[(newArr.length/2)-1])/2;
    else
        median = newArr[Math.floor(newArr.length / 2)];
    return median;
}
// 20min

//打印输出成绩单
function print() {
    var list = '成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n'
    var newAver = calcAver(inputArr);
    var newWhole = calcPerWhole(inputArr);
    for(let i = 0; i < inputArr.length; i++){
            list += inputArr[i][0] + '|' + inputArr[i][3] + '|' + inputArr[i][1] + '|' + inputArr[i][2] + '|' + inputArr[i][4] + '|' + newAver[i] + '|' + newWhole[i] + '\n';
    }
    list += '========================\n全班总平均分：' + calcAverWhole(calcAver(inputArr)) + '\n全班总分中位数：' + calcMedian(calcPerWhole(inputArr));
    return list;
}
console.log(print());
// 20min