$(function(){
    let titleHead=`<tr><th class="courseTableHead">場次</th><th class="courseTableHead">時間</th><th  class="courseTableHead">主題</th></tr>`
    let topicCount = topic.length;
    $("#courseTable").append(titleHead);
    
    // 一天有多少毫秒
    let millisecsperday=24*60*60*1000;
    const regex = new RegExp('停課');
    function buildTable(){
   
        for (let x=0;x<topicCount;x++){
           let colorStyle= regex.test(topic[x]) ? "style=\"color:red\"":"";
        // let colorStyle=topic[x]=="停課" ? "style=\"color:gray\"":"";
           let currentDate=new Date(startDate.getTime()+7*x*millisecsperday);
        $("#courseTable").append(
            `<tr class="courseTableRow">`+
            // 反引號(`)具有類似python的f'string
            `<td class="courseTableCell" ${colorStyle}>${x+1}</td>`+
            //增加一週所對應的毫秒增加量=7*millisecsperday
            //x也是相對於起始日期的日期變化量
            `<td class="courseTableCell" ${colorStyle}>${currentDate.getMonth()+1+"/"+currentDate.getDate()}</td>`+
            `<td class="courseTableCell" ${colorStyle}>${topic[x]}</td>`+
            "</tr>");
    }
    }
    buildTable();

    $("#inputDate").change(function(){
        let initial=document.getElementById("inputDate").value;
        if (initial){
            let initialDate= new Date(initial);
            $("#courseTable").empty();
            $("#courseTable").append(titleHead);
            setMonthAndDay(initialDate.getMonth()+1,initialDate.getDate());
            buildTable();
        }
    })
    
});
