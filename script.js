// console.log("hello world");
let songList = [];
let songName = [];
let fav_songlist = [];
let fav_songName = [];
let current_song = new Audio();
let cnt = 0;
let current_folder;
let display_folder;
let gold = `<svg class="star-icon" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="24" height="24">
       <path 
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
      stroke="#141B34"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="gold" />
     </svg>`;
     let gold2 = `<svg class="star-icon" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="35" height="35">
       <path 
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
      stroke="#141B34"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="gold" />
     </svg>`;
let white = `<svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path 
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
      stroke="#141B34"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="currentColor" />
  </svg>`;
function playmusic(songs) {
  cnt = 0;
  current_song.src = songs;
  current_song.play();
  current_song.volume = 0.5;
  play.src = "logo/pause.svg";
  ind = songList.indexOf(songs);
  document.querySelector(".songName .sName").innerHTML = songName[ind];
  let sngg = document.querySelectorAll(".songlist .ol li");
  for (let index = 0; index < sngg.length; index++) {
    const element = sngg[index];
    let taga = element.querySelector("a");
    let ii = element.querySelector(".song_text");
    if (taga.href == songs) {
      ii.style.color = "rgb(12 231 12)";
    } else ii.style.color = "white";
  }
}
function secTOmin(sec) {
  if (!sec) return "00:00";
  let strr = "";
  sec = Math.floor(sec);
  if (sec < 60) {
    if (sec < 10) {
      strr = `00:0${sec}`;
    } else {
      strr = `00:${sec}`;
    }
  } else {
    sm = Math.floor(sec / 60);
    ss = sec % 60;
    if (sm < 10) strr = `0${sm}`;
    else strr = sm;
    if (ss < 10) strr += `:0${ss}`;
    else strr += `:${ss}`;
  }
  return strr;
}
async function get_song_list(folder) {
  current_folder = folder;
  songList = [];
  songName = [];
  let path = await fetch(`/song/${folder}/`);
  let response = await path.text();

  let div = document.createElement("div");
  // console.log(div);
  div.innerHTML = response;
  let arr = div.querySelectorAll("a");
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.href.endsWith(".mp3")) songList.push(element.href);


    if (element.title.endsWith(".mp3")) songName.push(element.title);
  }
  current_song.src = songList[0];
  document.querySelector(".songName .sName").innerHTML = songName[0];
  let list = document.querySelector(".ol");
  list.innerHTML = "";
  for (let index = 0; index < songList.length; index++) {
    const link = songList[index];
    const song = songName[index];
    let li = document.createElement("li");
    let href = document.createElement("a");
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "containerdiv");
    let pic = document.createElement("img");
    pic.src = "logo/music.svg";

    // Create the text container
    let textContainer = document.createElement("div");
    textContainer.setAttribute("class", "song_text");
    textContainer.innerHTML = song;
    let fav_button = document.createElement("div");
    fav_button.setAttribute("class", "btnn");
    fav_button.setAttribute("data-fav", "white");
    
    fav_button.innerHTML = `${white}`;

    // Build the structure
    containerDiv.appendChild(pic);
    containerDiv.appendChild(textContainer);
    containerDiv.appendChild(fav_button);
    href.href = link;
    li.appendChild(containerDiv);
    li.appendChild(href);
    list.appendChild(li);
  }

  //adding eventlistener to play-list
  Array.from(document.querySelector(".ol").getElementsByTagName("li")).forEach(
    (element) => {
      element.addEventListener("click", () => {
        playmusic(element.querySelector("a").href);
      });
    }
  );

  //adding fav list evenlistner
  let arr2 = Array.from(
    document.querySelector(".ol").getElementsByTagName("li")
  );
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    element.querySelector(".btnn").addEventListener("click", () => {
       event.stopPropagation();
      let lin = element.querySelector("a");
      let sn = element.querySelector(".song_text");
      
      let dot = element.querySelector(".btnn");
      if(dot.getAttribute("data-fav") === "white"){
      dot.innerHTML = `${gold}`;
      dot.setAttribute("data-fav","gold");
      fav_songName.push(sn.innerHTML);
      fav_songlist.push(lin.href);
      }
      else{
         dot.innerHTML=`${white}`;
         dot.setAttribute("data-fav","white");
         let indd=fav_songName.indexOf(sn.innerHTML);
         fav_songName.splice(indd,1);
         fav_songlist.splice(indd,1);
      }
         // adding fav-list


  let list = document.querySelector(".rahad_ol");
  list.innerHTML = "";
  for (let index = 0; index < fav_songName.length; index++) {
    const link = fav_songlist[index];
    const song = fav_songName[index];
    let li = document.createElement("li");
    let href = document.createElement("a");
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "containerdiv");
    let pic = document.createElement("img");
    pic.src = "logo/music.svg";

    // Create the text container
    let textContainer = document.createElement("div");
    textContainer.setAttribute("class", "song_text");
    textContainer.innerHTML = song;
    let fav_button = document.createElement("div");
    fav_button.setAttribute("class", "btnn");
    fav_button.setAttribute("data-fav", "gold");
    
    fav_button.innerHTML = `${gold}`;

    // Build the structure
    containerDiv.appendChild(pic);
    containerDiv.appendChild(textContainer);
    containerDiv.appendChild(fav_button);
    href.href = link;
    li.appendChild(containerDiv);
    li.appendChild(href);
   
    list.appendChild(li);
  }
      for (const element of fav_songName) {
          console.log(element);
      }
    });
  }
}
async function display_albums() {
  let path = await fetch("/song/");
  let respnse = await path.text();
  let div = document.createElement("div");
  div.innerHTML = respnse;
  let fol = div.querySelectorAll("li a");
  let card_container = document.querySelector(".card_container");
  for (let index = 0; index < fol.length; index++) {
    const element = fol[index];
    let link = element.href;
    if (link.includes("/song")) {
      display_folder = element.title;
      let path2 = await fetch(
        `/song/${element.title}/info.json`
      );
      let response = await path2.json();
     
      card_container.innerHTML =
        card_container.innerHTML +
        ` <div data-folder="${element.title}"  class="card flex just_center align_center flex_col">
              <div class="img">
                <img src="song/${element.title}/cover.jpg" alt="" />
                <div class="folcon flex just_center align_center">
                  <img src="logo/folder_play.svg" alt="">
                  
                </div>
              </div>
              <div class="title">${response.title}</div>
              <div class="dis">${response.discription}</div>
            </div>`;
    }
  }
}
async function main() {
  await display_albums();
  await get_song_list(display_folder);
  //song list adding with table
  let play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (current_song.paused) {
      current_song.play();
      play.src = "logo/pause.svg";
    } else {
      current_song.pause();
      play.src = "logo/play.svg";
    }
  });
  let prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let ind = songList.indexOf(current_song.src);
    if (ind != 0) playmusic(songList[ind - 1]);
  });

  let next = document.getElementById("next");
  next.addEventListener("click", () => {
    let ind = songList.indexOf(current_song.src);
    if (ind != songList.length - 1) playmusic(songList[ind + 1]);
  });
  current_song.addEventListener("timeupdate", () => {
    let string =
      secTOmin(current_song.currentTime) +
      " / " +
      secTOmin(current_song.duration);
    let par = (current_song.currentTime / current_song.duration) * 100;
    document.querySelector(".timer").innerHTML = string;
    document.querySelector(".innerseekbar").style.width = `${par + 1}%`;
    document.querySelector(".circle").style.left = `${par}%`;
    let sname = document.querySelector(".sName");
    if (cnt == 100) {
      sname.style.transition = "none";
      cnt = 0;
    } else {
      sname.style.transition = `all 0.3s linear`;
    }
    sname.style.transform = `translateX(${-cnt}%)`;
    cnt += 2;
    let im = document.querySelector(".vol_icon img");
  });
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let point =
      (e.offsetX / e.currentTarget.getBoundingClientRect().width) * 100;
    document.querySelector(".innerseekbar").style.width = `${point + 1}%`;
    document.querySelector(".circle").style.left = `${point}%`;
    current_song.currentTime = (current_song.duration * point) / 100;
  });

  document
    .querySelector(".header img:first-child")
    .addEventListener("click", () => {
      let left = document.querySelector(".left");
      left.style.left = "0%";
      let sopt = document.querySelector(".text");
      sopt.style.color = "#121212";
    });
  document
    .querySelector(".amni img:nth-child(2)")
    .addEventListener("click", () => {
      let left = document.querySelector(".left");
      left.style.left = "-100%";
      let sopt = document.querySelector(".text");
      sopt.style.color = "white";
    });

  let vol = document.querySelector(".volume input");
  vol.addEventListener("change", (e) => {
    current_song.volume = e.target.value / 100;
    let im = document.querySelector(".vol_icon img");
    if (current_song.volume == 0) {
      im.src = "logo/mute.svg";
    } else {
      im.src = "logo/volume.svg";
    }
  });

  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async function (ee) {
      let folName = ee.currentTarget.dataset.folder;
      await get_song_list(folName);
      playmusic(songList[0]);
    });
  });

  //searching

  let dd = document.querySelector(".card_container");
  dd.addEventListener("click", (e) => {
    let srch = document.getElementById("search");
    if (e.target != srch) {
      srch.value = "";
      srch.dispatchEvent(new Event("input"));
    }
  });
  let srch = document.getElementById("search");
  srch.addEventListener("input", () => {
    let sng = srch.value.toLowerCase();
    // console.log(sng);
    let list = document.querySelector(".ol");
    list.innerHTML = "";
    for (let index = 0; index < songList.length; index++) {
      const link = songList[index];
      const song = songName[index];
      if (song.toLowerCase().includes(sng)) {
        //high lighting
        let highlight = srch.value;
        let regex = new RegExp(highlight, "gi");
        let highlighted = song.replace(regex, (match) => {
          return `<span style="color: aqua;">${match}</span>`;
        });

        let li = document.createElement("li");
        let href = document.createElement("a");
        let containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "containerdiv");
        let pic = document.createElement("img");
        pic.src = "logo/music.svg";

        // Create the text container
        let textContainer = document.createElement("div");
        textContainer.setAttribute("class", "song_text");
        textContainer.innerHTML = highlighted;

        // Build the structure
        containerDiv.appendChild(pic);
        containerDiv.appendChild(textContainer);
        href.href = link;
        li.appendChild(containerDiv);
        li.appendChild(href);
        list.appendChild(li);
      }
    }
    Array.from(
      document.querySelector(".ol").getElementsByTagName("li")
    ).forEach((element) => {
      element.addEventListener("click", () => {
        playmusic(element.querySelector("a").href);
      });
    });
  });
   
let st=  document.querySelector(".fav_songlist");
  st.innerHTML=st.innerHTML+`${gold2}`;

    let goldIcon = st.querySelector(".star-icon");
let hovarElement = document.querySelector(".hovar");

goldIcon.addEventListener("mouseenter", () => {
  hovarElement.style.opacity = "1";
});

goldIcon.addEventListener("mouseleave", () => {
  hovarElement.style.opacity = "0";
});
  st.addEventListener("click",(e) => {
        let rr=document.querySelector(".rahad");
       rr.style.right= rr.style.right==="0%"?"-100%":"0%";
  })

}
main();
