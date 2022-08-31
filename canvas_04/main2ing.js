let mapArray, ctx, currentImgMain;
// mapArray:決定地圖中每一個格子的元素
// ctx - HTML canvas用
let imgMountain, imgMain, imgEnamy;
// currentImgMainX,currentImgMainY 決定主角所在座標
// imgMountain, imgMain, imgEnamy 障礙物、主角、敵人的圖片物件
const gridLength =200; // 600*600的圖，即150*150為一格
// 網頁載入完成後初始化動作
$(function(){
    // 初始化地圖 - 0:可走 1-障礙物 2-終點 3-敵人 
    mapArray  = [ [0,1,1],
                  [0,0,0],
                  [3,1,2]
                ];
    ctx=$("#myCanvas")[0].getContext("2d");
    currentImgMain={"x":0,
                    "y":0
    };
    let sources = {
        imgMain:'images/spriteSheet.png',
        imgMountain:'images/material.png',
        imgEnemy:'images/Enemy.png'
    }
    loadImages(sources,function(images){
        ctx.drawImage(images.imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        for (var j in mapArray){
            for (var i in mapArray[j]){
                if(mapArray[j][i]==1){
                    ctx.drawImage(images.imgMountain,32,65,32,32,i*gridLength,j*gridLength,gridLength,gridLength);
                }else if(mapArray[j][i]==3){
                    ctx.drawImage(images.imgEnemy,7,40,104,135,i*gridLength,j*gridLength,gridLength,gridLength);
                }
            }            
        }
        
// 使用者按鈕按下去之後要做的事情 
    $(document).on("keydown",function(event){
        //cutimagePositionX - 決定主角臉朝向哪邊
        let targetImg, targetBlock, cutimagePositionX;

        targetImg={"x":-1,"y":-1};    // targetImg 主角的目標座標
        targetBlock={"x":-1,"y":-1};  // 主角的目標
    
        // 避免鍵盤預設行為發生，例如捲動/放大/換頁
        event.preventDefault(); 
        console.log(event.code); // event.code紀錄各種鍵盤輸入
    
        switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutimagePositionX=175; //臉朝左的圖
            break;
        case "ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutimagePositionX=355; //臉朝上的圖
            break;
        case "ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutimagePositionX=540; //臉朝右的圖
            break;
        case "ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutimagePositionX=0; //臉朝下的圖
            break;
        default: //其他按鍵不處理
            return;
        }
        // 確認目標位置不會超過地圖
        if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>=0){
// 注意二維陣列對應關係 (200,400)->[2][1] (0,400)->[2][0]

        targetBlock.x= targetImg.y/gridLength;
        targetBlock.y= targetImg.x/gridLength;
        }else{
        targetBlock.x=-1;
        targetBlock.y=-1;
        }
        // 清空主角原本所在位置
        ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        if(targetBlock.x !=-1 && targetBlock.y !=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0: // 空格(O)
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 1: // 障礙物(X)
                $("#talkBox").text("有山");
                break;
            case 2: // 終點(O)
                $("#talkBox").text("抵達終點");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 3: // 敵人(X)
                $("#talkBox").text("哈囉");
                break;
        }
        }else{
        $("#talkBox").text("邊界");
        }
    //重新繪製主角
        ctx.drawImage(images.imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    


});



















    })

});








// 外部call來的的函數
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }