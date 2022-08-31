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
    // 一般來說id應為唯一值，但jquery仍將其包在陣列內，故仍需要取出第一個值
    // canvas元素鋪好畫布，用getContext("2d")拿起2d畫筆，準備(用ctx)作畫
    ctx=$("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src ='images/spriteSheet.png';
    // 與一般二維陣列相同，canvas以左上角為原點/起始點
    currentImgMain={"x":0,
                    "y":0
    };
    //imgMain 讀進來之後再跑function
    imgMain.onload = function(){
        // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        // 圖像設計師會寫好sprite sheet，交給程式設計師去切來用(可開小畫家找數值設定)
        // 注意這裡x是直的y是橫
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.y,currentImgMain.x,gridLength,gridLength);
    };

    imgMountain=new Image();
    imgMountain.src='images/material.png';
    imgEnemy=new Image();
    imgEnemy.src='images/Enemy.png';
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for (var x in mapArray){
                for (var y in mapArray[x]){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    }



});
// 使用者按鈕按下去之後要做的事情 
$(document).on("keydown",function(event){


});