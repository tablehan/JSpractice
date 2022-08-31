$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz == null){
           // alert("yo");
           currentQuiz = 0;
           $("#questions").text(questions[0].question);
           $("#options").empty();
           questions[0].answers.forEach(
              function(element, index, array){
                 $("#options").append(
                    `<input name='options' class='opt' type='radio' value='${index}'><label> &nbsp; ${element[0]}</label><br><br>`
                 );
              }
           );
           $("#startButton").attr("value", "Next");
        }else{
           $.each($(":radio"),function(i, val){
              if(val.checked){
                 //抓出使用者選了哪一個
                 //最後一題->結果, 其他->跳到對應的下一題
                 if(isNaN(questions[currentQuiz].answers[i][1])){
                    //產生最後結果
                    var finalResult = questions[currentQuiz].answers[i][1];
                    $("#questions").text(finalAnswers[finalResult][0]);
                    $("#options").empty();
                    $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                    currentQuiz = null;
                    $("#startButton").attr("value", "重新開始");
                 }else{
                    //跳下一題(PS.要-1因為原題目號碼是給人類看的從1開始)
                    currentQuiz = questions[currentQuiz].answers[i][1]-1;
                    console.log("currentQuiz:"+currentQuiz);
                    $("#questions").text(questions[currentQuiz].question);
                    console.log("question:"+questions[currentQuiz].question);
                    $("#options").empty();
                    questions[currentQuiz].answers.forEach(
                       function(element, index, array){
                          $("#options").append(
                             `<input name='options'class='opt' type='radio' value='${index}'><label> &nbsp; ${element[0]}</label><br><br>`
                          );
                       }
                    );
                 }
                 return false;
              }
           });
        }
    });
  });