let topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "迴圈",
    "IO流程控制",
    "停課",
    "真的停課",
    "假的停課"
    ];
let startDate = new Date();

//設定好活動第一次的日期
function setMonthAndDay(startMonth,startDay){
    //1.注意:js的month編號從1~12月分別是0~11，所以要減1
    //註:週[日~六]=[0~6]
    //2.setMonth方法同時具有設定日的功能
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
//呼叫自訂函數設定第一次活動的日期為2月21日
setMonthAndDay(2,21);
