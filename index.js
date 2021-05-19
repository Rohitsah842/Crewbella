var searchField = "ishanmathur";
var data;
const m2 = moment("10-05-2020");
console.log(m2.fromNow());
function show_hide() {
    let show = document.getElementById("show_hide_content");
    show.style.display === "none" ? show.style.display = "block" : show.style.display = "none";
}
function user_input(el) {
    searchField = el.target.value;
    console.log(searchField)
    getdata();
}
async function getdata() {
    const url = `https://crewbella.com/user/api/profile/${searchField}`
    data = await fetch(url);
    let jsondata = await data.json();
    console.log(jsondata)
    var date = new Date(jsondata.basic.created_at);
    let profile_data = document.getElementById("profile_data");
    profile_data.innerHTML = "";
    profile_data.innerHTML = `<div class="profile_container"><div class="Row-1"><div style="margin:15px;"><img src="${jsondata.basic.image}" style="border-radius:50%"/></div>
    <div style="margin:15px;">
    <h2 style="color:black; margin:5px">${jsondata.basic.fullname}</h2>
    <h3 style="color: rgb(38, 38, 228); margin:5px">@ser${jsondata.basic.username}</h3>
    <h4 style="color: rgb(53, 53, 59); margin:5px">•${jsondata.basic.followings} Followers•</h4>
    </div>
    </div>
    <div class="Row-2">
    <div class="col-1">
    <div class="basic_information"><i class="fal fa-border-all"></i> ${jsondata.professions[0].title}</div>
    <div class="basic_information"><i class="far fa-map-marker-alt"></i> ${jsondata.locations[0].city}</div>
    <div class="basic_information">${jsondata.basic.bio}</div>
    <div class="basic_information btn"><button style="border-radius: 25px;" onClick=show_hide()>Know More <i class="fal fa-angle-down"></i> </button></div>
    <div id="show_hide_content" style="display:none;"><p> <i class="fal fa-calendar"></i> Joined: <strong> ${date.getMonth() + 1}/${date.getFullYear()}</strong></p>
    <p> <i class="fal fa-meh"></i> Date of Birth:<strong>${jsondata.basic.dob}</strong></p>
    <p><i class="fal fa-globe"></i> Website: <a href="${jsondata.basic.website}">${jsondata.basic.website}</a></p>
    <p><i class="fab fa-instagram"></i> Instagram: <a href="${jsondata.basic.instagram}">${jsondata.basic.instagram}</a></p>
    </div>
    </div>
    <div class="col-2">
    <div style="width:100%"><span style=" font-weight: bold;">Profile Strength</span>
    <div class="progress_bar">
  <div class="progress_container" style="width:${jsondata.basic.strength}%">${jsondata.basic.strength}.00%</div>
</div>
    </div>
    <div class="link_class">
    <a href="" style="text-decoration: none; font-weight:bold; padding:5px"><i class=" icon fal fa-user-plus"></i><br/>Follow</a>
    <a href="" style="text-decoration:none; font-weight:bold; padding:5px"><i class=" icon fab fa-telegram-plane"></i><br/>Ping</a>
    <a href="" style="text-decoration:none; font-weight:bold; padding:5px"><i class=" icon fal fa-shield"></i><br/>Connect</a>
    <a href="" style="text-decoration:none; font-weight:bold; padding:5px"><i class=" icon fal fa-share-square"></i><br/>Share</a>
    </div>
    </div>
    </div>
    <div style="display: flex;"><div class="profile-btn">
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-star"></i></span>Top</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-award"></i></span>Portfolio</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-briefcase"></i></span>Client Postings</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-share-alt"></i></span>Crew Postings</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-clock"></i></span>Skills</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-border-all"></i></span>Professions</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="far fa-map-marker-alt"></i></span>Operating in</button>
    <button class="button-btn"><span style="margin: 10px;"><i class="fal fa-comment"></i></span>Intraction</button>
    </div>
    <div class="educational_container">
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Skills </span><span> • ${moment(jsondata.skills[0].created_at).fromNow()}</span></a></div></div>
    <div class="edu_row_body-2"><span><i class="fas fa-lightbulb-on" style="color: yellow;font-size: 35px;padding-top: 20px;"></i> </span><div><p>Added a new skill  <b>${jsondata.skills[0].title}</b></p><span style="border: 0.5px solid gray;border-radius: 25px;padding: 0 5px;font-size: 13px;">Advance</span></div></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Professions </span><span> • ${moment(jsondata.professions[0].created_at).fromNow()}</span></a></div></div>
    <div class="edu_row_body-2"><span><i class="fas fa-briefcase" style="color: red;font-size: 35px;"></i> </span><div><p>Working as a  <b>${jsondata.professions[0].title}</b> for ${jsondata.professions[0].experience} Year(s)</p></div></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Client Posting </span><span> • ${moment(jsondata.client_postings[0].created_at).fromNow()} </span></a></div></div>
    <div><h3 style="margin: 0;">${jsondata.client_postings[0].profession} <span style="border: 0.5px solid gray;border-radius: 10px;margin-left: 20px;font-weight: normal;padding: 0 11px;background-color: darkgray">OPEN</span></h3><p>${jsondata.client_postings[0].description}</p></div>
    <div class="edu_row-3"><a href="" style="text-decoration:none;color:black"><i class="fal fa-briefcase"></i> Apply</a><a href="" style="text-decoration:none;color:black"><i class="fal fa-expand-alt"></i> Details</a><a href="" style="text-decoration:none;color:black"><i class="far fa-share-alt"></i> Share</a></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Intractions </span><span> •${moment(jsondata.questions[0].created_at).fromNow()}</span></a></div></div>
    <div><h3 style="margin: 0;">${jsondata.questions[0].title} </h3><p>${jsondata.questions[0].description}</p></div>
    <div class="edu_row-3"><a href="" style="text-decoration:none;color:black"><i class="far fa-comment"></i> View</a><a href="" style="text-decoration:none;color:black"><i class="far fa-pen-alt"></i> Write</a><a href="" style="text-decoration:none;color:black"><i class="far fa-share-alt"></i> Share</a></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Client Posting </span><span> • ${moment(jsondata.client_postings[1].created_at).fromNow()}</span></a></div></div>
    <div><h3 style="margin: 0;">${jsondata.client_postings[1].profession} <span style="border: 0.5px solid gray;border-radius: 10px;margin-left: 20px;font-weight: normal;padding: 0 11px;background-color: darkgray">OPEN</span></h3><p>${jsondata.client_postings[1].description}</p></div>
    <div class="edu_row-3"><a href="" style="text-decoration:none;color:black"><i class="fal fa-briefcase"></i> Apply</a><a href="" style="text-decoration:none;color:black"><i class="fal fa-expand-alt"></i> Details</a><a href="" style="text-decoration:none;color:black"><i class="far fa-share-alt"></i> Share</a></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Skills </span><span> •${moment(jsondata.skills[1].created_at).fromNow()}</span></a></div></div>
    <div class="edu_row_body-2"><span><i class="fas fa-lightbulb-on" style="color: yellow;font-size: 35px;padding-top: 20px;"></i> </span><div><p>Added a new skill  <b>${jsondata.skills[1].title}</b></p><span style="border: 0.5px solid gray;border-radius: 25px;padding: 0 5px;font-size: 13px;">Intermediate</span></div></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Crew Postings</span><span> • ${moment(jsondata.crew_postings[0].created_at).fromNow()}</span></a></div></div>
    <div><h3 style="margin: 0;">${jsondata.crew_postings[0].profession} <span style="border: 0.5px solid gray;border-radius: 10px;margin-left: 20px;font-weight: normal;padding: 0 11px;background-color: darkgray">OPEN</span></h3><p>${jsondata.client_postings[0].description}</p></div>
    <div class="edu_row-3"><a href="" style="text-decoration:none;color:black"><i class="fal fa-briefcase"></i> Hire</a><a href="" style="text-decoration:none;color:black"><i class="fal fa-expand-alt"></i> Details</a><a href="" style="text-decoration:none;color:black"><i class="far fa-share-alt"></i> Share</a></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Operating In </span><span> • ${moment(jsondata.locations[0].created_at).fromNow()}</span></a></div></div>
    <div class="edu_row_body-2"><span><i class="fas fa-map-marker-alt" style="color: red;font-size: 35px;"></i></span><div><p>Now available for work in  <b>${jsondata.locations[0].city},${jsondata.locations[0].zip_code},${jsondata.locations[0].state},${jsondata.locations[0].country}</b></p></div></div>
    </div>
    <div class="edu_row-1">
    <div class="edu_row_body-1"><div class="edu_col-1"><img src="${jsondata.basic.image}" style="border-radius:50%;height:65px "/></div><div class="edu_col-2"><a href="" style="text-decoration: none;"><h4 style="margin: 0;">${jsondata.basic.username}</h4><span style="color:blue">Portfolio </span><span> • ${moment(jsondata.portfolio[0].created_at).fromNow()}</span></a></div></div>
    <div><h3 style="margin: 0;">${jsondata.portfolio[0].position} at ${jsondata.portfolio[0].project_name}</h3><a href="" style="text-decoration:none">${jsondata.portfolio[0].link}</a><div style="display: flex;justify-content: space-around;text-align: center;"><span>Started</br><b>${jsondata.portfolio[0].started_time}</b></span><span>Ended</br><b>${jsondata.portfolio[0].ended_time}</b></span></div><p>${jsondata.portfolio[0].description}</p><div class="img_content"><img src="${jsondata.portfolio[0].images[0].image}" class="img" alt="Reload Again" /><img src="${jsondata.portfolio[0].images[1].image}" class="img"alt="Reload Again" /><img src="${jsondata.portfolio[0].images[2].image}"class="img" alt="Reload Again" /><img src="${jsondata.portfolio[0].images[3].image}" class="img"alt="Reload Again" /></div></div>
    <div class="edu_row-3"><a href="" style="text-decoration:none;color:black"><i class="far fa-share-alt"></i> Share</a></div>
    </div>
    </div>
    </div>
    </div>`

}
getdata();