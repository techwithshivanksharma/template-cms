function head(){
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homepage</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="head">
            <h1>Company Name</h1>
        </div>
        <div class="nav">
            <a href="index.html">Home</a>
            <a href="page1.html">Page1</a>
            <a href="page2.html">Page2</a>
            <a href="page3.html">Page3</a>
            <a href="page4.html">Page4</a>
        </div>`);     
}

function banner(idata){
    document.write(`<div class="banner">
    <img src="images/${idata}" alt="banner-1">
</div>`)
}

function post(){

    let count=1;

    do{
    document.write(`  
        <div class="post">
            <h1>Article ${count}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, non hic assumenda aliquam delectus, ipsam ratione atque ad, quis ipsum debitis voluptates cum temporibus incidunt suscipit distinctio earum consequatur et ab! Exercitationem id est magnam nam necessitatibus inventore, debitis ex itaque cum corrupti veniam incidunt! Repellendus deserunt molestiae delectus minus sequi ullam? Deserunt reiciendis temporibus nihil fuga provident veritatis maxime blanditiis ducimus neque officiis repellendus tenetur, modi laboriosam necessitatibus odio, ea dolores error in, nesciunt tempore deleniti. Dolores quaerat rerum sint fugit neque voluptatem quos blanditiis voluptas cum, sit hic voluptate dolorum enim itaque architecto explicabo eos deleniti veniam omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex tenetur nesciunt sunt veniam. Doloremque qui, quaerat omnis aliquid asperiores, fugiat porro quas delectus molestiae, magni accusamus possimus odit a sit deleniti ex necessitatibus animi! Hic, necessitatibus cumque? Delectus unde ipsam, libero harum provident earum architecto nemo est deserunt sint a cum, nulla nostrum veritatis optio, impedit aspernatur inventore fugit molestias dicta! Eum fugit magni exercitationem ipsa asperiores ab voluptatem vitae. Reiciendis adipisci odit repellendus, optio quis maxime molestias nulla.</p>
        </div>`);
        count++;
    }while(count<=5);    
 }    

 function aside(){
    document.write(`<div class="aside">
    <marquee behavior="" direction="">Advertisement 1</marquee>
    <img src="images/Honda.png" alt="advertisement1">
    <marquee behavior="" direction="">Advertisement 2</marquee>
    <img src="images/honda2.jpg" alt="advertisement1">
    <marquee behavior="" direction="">Advertisement 3</marquee>
    <img src="images/passionpro.jpg" alt="advertisement1">
    </div>`);
 }

 function footer(){
    document.write(`<div class="footer">
    <h3>CopyRight &copy 2023</h3>
</div> </body> </html>`);
 }