$(function(){
    // 確認能夠知道使用者按了按鈕
    // $("input") => document.getElementByTagname("input")
    // on => addEventListener
    let prev= -1;
    let randomChildNumber=-1;
     $("#ButtonChow").on("click",function(){
        //alert("hi");
        let numberOfListItem = $("#choices li").length;
        // [0,1) => [0,3) => 0:[0,1) , 1:[1,2) ,2: [2,3)
        // randomChildNumber = Math.floor(Math.random()*numberOfListItem);

        while (randomChildNumber == prev && numberOfListItem>1){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        prev=randomChildNumber;
        if (numberOfListItem==1){randomChildNumber=0;}
        console.log(randomChildNumber);
        //alert(Math.floor(Math.random()*numberOfListItem));

        $("#h1id").text($("#choices li").eq(randomChildNumber).text());
        let pic = ["https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
                   "https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F391516%2F4a15cb3a501a0c4e.jpg&width=427",
                   "https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F355834%2Fb8ce15624e2ddb11.jpg&width=427"
                  ]
        $("#imgchow").attr("src",pic[randomChildNumber]);

    });
});
