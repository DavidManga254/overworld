@media screen and (max-width:600px){
    body{
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-size: 1.2rem;
        color: white;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    p{
        margin: 0;
        padding: 0;
    }
    div{
        max-width: 100%;
        border-style: solid;
        border-width: thin;
        border-color: transparent;
    }
    nav{
        position: relative;
        display: flex;
        width: 100vw;
        justify-content: space-between;
    }
    #section1{
        background-image: url('../images/home/main-home-rev-1.png');
        background-size: 100% 110%;
        background-attachment: scroll;
    }
    #closer{
        display: none;
    }
    .mobile2{
        margin-top: 10%;
        margin-right: 2%;
    }
    .navigation{
        position: absolute;
        display: none;
        background-color: rgb(0,0,0,.8);
        color: white;
        width: 100vw;
        top: 100%;
        left: 0;
        height: 100vh;
        animation-name: openmenu;
        animation-duration: 1s;
    }
    @keyframes openmenu{
        from{
            height:0vh;
        }
        to{
            height:100vh;
        }
    }
    .navcomp .bar{
        display: none;
    }
    nav img{
        width:6rem;
        aspect-ratio: 1/1;
    }
    .introheaderimage{
        width: 100vw;
    }
    .imagecontainer{
        margin-top: 30%;
    }
    .logoimage{
        margin: 0 auto;
        width: fit-content;
    }
    .logoimage img{
        width: 85%;
        margin-left: 7.5%;
        animation-name: changer;
        animation-duration: 1s;
        animation-delay: .5s;
    }
    @keyframes changer{
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
          }
    }
    .directives{
        display: flex;
        justify-content: center;
        margin-top: 5%;
        margin-bottom: 50%;
    }
    .directives button{
        clip-path: polygon(84% 0, 100% 23%, 100% 60%, 100% 100%, 19% 100%, 0 80%, 0 0);        
        width: 15rem;
        height: 5rem;
        font-size: 1.8rem;
        box-sizing: content-box;
        aspect-ratio: 2/0.5;
        color: white;
        background-color: #6E48B1;
        --initialTextColor: #FFF;
      --slideTextColor: #FFF;

      --initialBgColor: #6E48B1;
      --slideBgColor: #FE3D2E;

      color: var(--initialTextColor);

      background-image: linear-gradient(90deg,
          var(--initialBgColor) 0%,
          var(--initialBgColor) 50%,
          var(--slideBgColor) 50%,
          var(--slideBgColor) 100%);
        background-size: 200%;
        transition: background-position .3s cubic-bezier(.47, .1, 1, .63),
        color .2s linear;
      transition-delay: 0.0s, 0.15s;
    }
    .directives button:hover{
        background-color: #FE3D2E;
        cursor: pointer;
        color: var(--slideTextColor);
        cursor: pointer;
        background-position: -100% 100%;
    }
    #section2{
        background-image: url('../images/home/main-home-bckgd-img.jpg');
        background-attachment: scroll;
        background-size: 100% 100%;
    }
    .introvideo{
        display: flex;
        justify-content: center;
    }
    .introvideo video{
        width: 90%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-color: transparent;
        margin-top: 15%;
        margin-bottom: 25%;
    }
    .tournamentTitle{
        display: flex;
        margin-top: 15%;
        margin-bottom: 15%;
    }
    .rotate{
        width: fit-content;
        height: fit-content;
        rotate: 270deg;
        font-size: 1.2rem;
    }
    .maintitle{
        font-size: 1.85rem;
        margin-left: -6%;
        margin-top: -5%;
    }
    .tournamentSection{
        margin-bottom: 20%;
        margin-top: 10%;
        font-size: 1.1rem;
    }
    .namesection{
        display: flex;
        justify-content: space-between;
        background-color: rgb(244, 138, 244,.1);
        width: 90vw;
        height: 5rem;
        overflow: visible;
        position: relative; 
        padding-left: 5%; 
    }
    .namesection img{
        width: 10rem;
        height: 13rem;
        margin-top: -18%;
    }
    .namesection p{
        margin-top: 6%;
    }
    .gamesection{
        margin-top: 3%;
        display: flex;
        justify-content: flex-end;
        padding-right: 5%;
    }
    .gamesection2{
        display: flex;
        margin-top: 3%;
    }
    .gamesection i{
        margin-left: 3%;
    }
    .gamesection2 i{
        margin-left: 3%;
    }
    .scores{
        margin-top: 5%;
        margin-bottom: 13%;
    }
    .scores p{
        text-align: center;
    }
    .dascore{
        font-size: 3.5rem;
    }
    .dadate{
        font-size: 1rem;
    }
    #section3{
        background-image: url('../images/home/main-home-rev-1.png');
        background-size: 100% 110%;
        background-attachment: scroll;
        position: relative;
    }
    .newsimage{
        display: flex;
        margin-top: 10%;
        justify-content: center;
        margin-bottom: 30%;
    }
    .newsimage img{
        width: 20rem;
        position: absolute;
    }
    .slidergames{
        position: relative;
    }
    .theslider{
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        display: flex;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        
    }
    .theslider::-webkit-scrollbar{
        display: none;
    }
    .slidernews{
        scroll-snap-align:center;
        width:90vw;
        margin-right: 2rem;
    }
    .detail1{
        padding-left: 3%;
        width: 100%;
        font-size: .8rem;
        margin-right: 130vw;
        margin-top: 13rem;
    }
    .detail1 span:hover{
        color: #FE3D2E;
        transition: color .5s;
        cursor: pointer;
    }
    .detail2{
        padding-left: 3%;
        font-size: 1.6rem;
    }
    .detail2 span{
        display: flex;
    }
    .detail2 span:hover .show{
        display: block;
        overflow: hidden;
        width: 3.2vw;
        font-size: 1.2rem;
        animation-name: showarrow;
        animation-duration: .5s;
    }
    .detail2 span:hover #show{
        display: block;
    }
    @keyframes showarrow{
        from{
            width: 0vw;
        }to{
            width:3.2vw;
        }
    }
    .detail2 span:hover,p:hover{
        color: #6E48B1;
        transition: color .5s;
        cursor: pointer;
    }.show{
        display: none;
    }
    .right{
        position: absolute;
        right: 3vw;
        top: 40%;
        font-size: 3rem;
    }
    .left{
        position: absolute;
        left: 3vw;
        top: 40%;
        font-size: 3rem;
    }
    .right:hover, .left:hover{
        transform: scale(1.5);
        transition: transform 1s;
        color:#4a2f7a;
    }
    .detail1 p{
        border-color: white;
        display: flex;
    }
    #news1{
        background-image: url('../images/home/main-home-blog-slider-img-1.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #news2{
        background-image: url('../images/home/main-home-blog-slider-img-3.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #news3{
        background-image: url('../images/home/main-home-img-13.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    .newer{
        margin-top: 10%;
        width: 80vw;
        margin-left: 10vw;
        background-color: rgba(87, 4, 87, .3);
        
    }
    .newer img{
        width: 100%;
        aspect-ratio:16/10 ;
    }
    .newerimage{
        margin-bottom: 0;
    }
    .imageinfo{
        
        width: 90%;
        padding-top: 5%;margin-top: 0;
        font-size: 1.2rem;
    }
    .minorinfo{
        color: purple;
    }
    .imageinfo span:hover{
        color: #FE3D2E;
        transition: color .5s;
    }
    #teams{
        background-image: url('../images/home/main-home-bckgd-img.jpg');
        background-attachment: scroll;
    }
    #dereck{
        background-image: url('../images/home/rooster-img-6-768x768.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #BEN{
        background-image: url('../images/home/rooster-img-1-768x768.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #gosta{
        background-image: url('../images/home/rooster-img-2-768x768.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #arnfa{
        background-image: url('../images/home/rooster-img-3-768x768.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #zacha{
        background-image: url('../images/home/rooster-img-4-768x768.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    #sveker{
        background-image: url('../images/home/main-home-blog-slider-img-1\ -\ Copy.jpg');
        background-size: 100% 100%;
        background-attachment: scroll;
    }
    .detailcontainer div{
        margin-top: 70%;
    }
    .teamtitles{
        margin-top: 15%;
        margin-bottom: 10%;
    }
    .teamtitles p{
        text-align: end;
        font-size: 1.8rem;
    }
    .detailcontainer{
        width: 80vw;
        margin-left: 5vw;
        margin-bottom: 10%;
        padding-left: 10%;
        font-size: 1.3rem;
    }
    .detailcontainer:hover{
        clip-path: polygon(91% 0, 100% 11%, 100% 60%, 100% 99%, 8% 100%, 0 91%, 0 0);
        transform: scale(1.05);
        transition: transform 1s,clip-path .5s;
        cursor: pointer;
    }
    .detailcontainer:hover span{
        color: #FE3D2E;
        transition: color .5s;
    }
    .detailcontainer span{
        margin-bottom: 10%;
    }
    .newstitle p{
        text-align: center;
        font-size: 2rem;
    }
    .newstitle{
        margin-top: 10%;
    }
    .email{
        margin-top: 10%;
    }
    .email div{
        display: flex;
        justify-content: center;
    }
    .email input{
        background-color: transparent;
        color: white;
        outline: none;
        width: 70vw;
        aspect-ratio: 2/0.3;
        margin-bottom: 5%;
        font-size: 1.5rem;
    }
    .email button{
        width: 70vw;
        height: 5rem;
        font-size: 1.7rem;
        clip-path: polygon(91% 0, 100% 11%, 100% 60%, 100% 99%, 8% 100%, 0 91%, 0 0);
        background-color: #FE3D2E;
        --initialTextColor: #FFF;
      --slideTextColor: #FFF;

      --initialBgColor: #6E48B1;
      --slideBgColor: #FE3D2E;

      color: var(--initialTextColor);

      background-image: linear-gradient(90deg,
          var(--initialBgColor) 0%,
          var(--initialBgColor) 50%,
          var(--slideBgColor) 50%,
          var(--slideBgColor) 100%);
        background-size: 200%;
        transition: background-position .3s cubic-bezier(.47, .1, 1, .63),
        color .2s linear;
      transition-delay: 0.0s, 0.15s;
    }
    .email button:hover{
        background-color: #6E48B1;
        cursor: pointer;
        color: var(--slideTextColor);
        cursor: pointer;
        background-position: -100% 100%;
    }
    footer{
        margin-top: 20%;
    }
    .footerimage{
        display: flex;
        justify-content: center;
        margin-bottom: 10%;
    }
    .footerdirectives p{
        text-align: center;
        margin-bottom: 5%;
    }
}
