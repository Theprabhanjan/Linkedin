function mouseHidder(){
    var middleDiv = document.querySelector('.middle');
    middleDiv.addEventListener('mouseenter', function(){
        document.querySelector('#minicircle').style.display='none'
    })
    middleDiv.addEventListener('mouseleave', function(){
        document.querySelector('#minicircle').style.display=`inline-block`
    })
}
mouseHidder();


function mouseFollower() {
  window.addEventListener("mousemove", function (det) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
  });
}


window.addEventListener("mouseenter",function(){
  console.log('hello');
})


function postCreater() {
  var clutter = "";
  var arr = [
    {
      postdets: "First post !",
      
      link: "https://google.com",
      name: "Google",
    youtubeSource:"<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZVvHHc5vvw?si=LZW2cWHXMpGL5Dho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
      
     
    },
    {
      
        
      
    },
  ];

  arr.forEach(function (obj) {
    clutter += `<div id="post">
      <post-global-nav>
        <div class="post-nav">
        <div class="post-profile-pic"> <img src="Assets/Media/me.jpg" alt="" /></div>
          <div class="post-userinfo">
            <span>
              <span>Prabhanjan Dhobale</span>
              <span>(He/him) </span>. 1st
            </span>
            <span>Student at Sinhgad College of Engineering</span>
          </div>
        </div>
        <div class="post-info">
          <p>
           ${obj.postdets}
          </p>
        </div>
      </post-global-nav>
       <div class="post-hero"> 
        <div class="post-pic">
      
          <span>`${obj.youtubeSource}`</span>
          <div id="post-pic-hover">
            <span style="margin-right:5px"> Go to </span>
            <a href="${obj.link}" target="_blank"> ${obj.name} <i class="ri-arrow-right-up-line"></i></a>
          </div>
        </div>
      </div>
      <hr width="95%" size="2px">
      <post-footer>
        <a href="#"
          >Like <span><i class="fa-regular fa-thumbs-up"></i></span
        ></a>
        <a href="#"
          >Comment <span><i class="fa-regular fa-message"></i></span
        ></a>
        <a href="#"
          >Repost <span><i class="fa-regular fa-message"></i></span
        ></a>
        <a href="#"
          >Share <span><i class="fa-solid fa-share"></i></span
        ></a>
      </post-footer>
    </div>`;
  });

  document.querySelector(".jsposts").innerHTML = clutter;
}

function smoothScrolling() {
  const scroll = new LocomotiveScroll({
    // el: document.querySelector(['#main']),
    el: document.querySelector(["#page1", "#page2"]),
    smooth: true,
  });
}

postCreater();
mouseFollower();
smoothScrolling();
