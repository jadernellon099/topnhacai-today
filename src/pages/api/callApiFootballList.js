import React from "react";

export const config = {
    api: {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "adde8fda05msh77652467d71f04dp115415jsnd7837476ac85",
        },
    },
  }

function CallApiFootballList() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "adde8fda05msh77652467d71f04dp115415jsnd7837476ac85",
    },
  };

  var now = new Date();
  var thisMonth = now.getUTCMonth() + 1; //months from 1-12
  if (thisMonth < 10) {
    thisMonth = "0" + thisMonth;
    console.log(thisMonth);
  }
  var thisDay = now.getUTCDate();
  if (thisDay < 10) {
    thisDay = "0" + thisDay;
    console.log(thisDay);
  }
  var thisYear = now.getUTCFullYear();
  var thisDate = thisYear + "-" + thisMonth + "-" + thisDay;
  var url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?next=30";
  var timezone = "Asia/Ho_Chi_Minh";
  var apiurl = url + "&timezone=" + timezone;
  fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&timezone=" +
      timezone,
    options
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  //   function HandleInProgress(data) {
  //     const InProgress = document.getElementById("inprogress");
  //     let matchinprogress = data;
  //     let checkmatch = matchinprogress.results;
  //     if (checkmatch == 0) {
  //       console.log("Không có trận đấu đang diễn ra");
  //     } else {
  //       console.log(matchinprogress);
  //       var progress = matchinprogress.response;
  //       const html = progress
  //         .map((items) => {
  //           return `
  //                 <tr>
  //                     <td class="td-time bxleft">
  //                         <span class="time">${items.fixture.date}</span>
  //                         <span class="league">${items.league.name}</span>
  //                       </td>
  //                       <td class="match bxleft">
  //                         <div class="fc-name-tips">
  //                           <div class="bxlogo">
  //                             <span class="logo"><img data-lazyloaded="1" src='${items.teams.home.logo}' width="50" height="50" alt="Barnechea" data-ll-status="loaded" class="entered litespeed-loaded"></span>
  //                             <span class="name">${items.teams.home.name}</span>
  //                           </div>
  //                           <div class="bxlogo">
  //                             <span class="logo"><img data-lazyloaded="1" src="${items.teams.away.logo}"  width="50" height="50" alt="Santiago Morning" data-ll-status="loaded" class="entered litespeed-loaded"></span>
  //                             <span class="name">${items.teams.away.name}</span>
  //                           </div>
  //                         </div>
  //                       </td>
  //                       <td>
  //                         <span id=${items.fixture.id}></span></td>
  //                       <td class="premium_sc td-odds" id=odd${items.fixture.id} ></td>
  //                       <td class="td-result">
  //                         <div class="rsnumb">
  //                         <span>${items.goals.home}</span>
  //                         <span>${items.goals.away}</span>
  //                         </div>
  //                       </td>
  //                       <td class="td-status">
  //                         <span class="status-tips status-playing">playing</span>
  //                       </td>
  //                     </tr>
  //                       `;
  //         })
  //         .join("");
  //       InProgress.innerHTML = html;
  //       for (let i = 0; i < progress.length; i++) {
  //         fetch(
  //           "https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=" +
  //             progress[i].fixture.id,
  //           options
  //         )
  //           .then((response) => response.json())
  //           .then((data) => prediction(data));
  //         function prediction(data) {
  //           let pre = data;
  //           var winer = pre.response[0].predictions.winner.name;
  //           //console.log(winer);
  //           if (winer == null) {
  //             document.getElementById(progress[i].fixture.id).innerHTML = "";
  //           } else
  //             document.getElementById(progress[i].fixture.id).innerHTML = winer;
  //         }
  //         fetch(
  //           "https://api-football-v1.p.rapidapi.com/v3/odds?fixture=" +
  //             progress[i].fixture.id,
  //           options
  //         )
  //           .then((response) => response.json())
  //           .then((data) => handleodd(data));
  //         function handleodd(data) {
  //           let odddata = data;
  //           if (odddata.results == 0) {
  //             document.getElementById("odd" + progress[i].fixture.id).innerHTML =
  //               "";
  //           } else {
  //             console.log(odddata);
  //             var array = odddata.response[0].bookmakers;
  //             var check = true;
  //             while (check) {
  //               for (let y = 0; y < array.length; y++) {
  //                 var findById = array[y].bets;
  //                 for (let z = 0; z < findById.length; z++) {
  //                   var oddfound = findById[z];
  //                   if (oddfound.id == 21) {
  //                     check = false;
  //                     document.getElementById(
  //                       "odd" + progress[i].fixture.id
  //                     ).innerHTML = oddfound.values[0].odd;
  //                   } else {
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   fetch(apiurl, options)
  //     .then((response) => response.json())
  //     .then((data) => HandleData(data));
  //   function HandleData(data) {
  //     const tr = document.getElementById("data");
  //     let allmatchtoday = data;
  //     let listfixture = allmatchtoday.response;

  //     const html = listfixture
  //       .map((items) => {
  //         return `
  //             <tr>
  //                 <td class="td-time bxleft">
  //                     <span class="time">${items.fixture.date}</span>
  //                     <span class="league">${items.league.name}</span>
  //                   </td>
  //                   <td class="match bxleft">
  //                     <div class="fc-name-tips">
  //                       <div class="bxlogo">
  //                         <span class="logo"><img data-lazyloaded="1" src='${items.teams.home.logo}' width="50" height="50" alt="Barnechea" data-ll-status="loaded" class="entered litespeed-loaded"></span>
  //                         <span class="name">${items.teams.home.name}</span>
  //                       </div>
  //                       <div class="bxlogo">
  //                         <span class="logo"><img data-lazyloaded="1" src="${items.teams.away.logo}"  width="50" height="50" alt="Santiago Morning" data-ll-status="loaded" class="entered litespeed-loaded"></span>
  //                         <span class="name">${items.teams.away.name}</span>
  //                       </div>
  //                     </div>
  //                   </td>
  //                   <td>
  //                     <span id=${items.fixture.id}></span></td>
  //                   <td class="premium_sc td-odds" id=odd${items.fixture.id}></td>
  //                   <td class="td-result">
  //                     <span class="rsempty">-:-</span>
  //                   </td>
  //                   <td class="td-status">
  //                     <span class="status-tips status-wait">wait</span>
  //                   </td>
  //                 </tr>
  //                   `;
  //       })
  //       .join("");
  //     tr.innerHTML = html;
  //     for (let i = 0; i < listfixture.length; i++) {
  //       fetch(
  //         "https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=" +
  //           listfixture[i].fixture.id,
  //         options
  //       )
  //         .then((response) => response.json())
  //         .then((data) => prediction(data));
  //       function prediction(data) {
  //         let pre = data;
  //         var winer = pre.response[0].predictions.winner.name;
  //         //console.log(winer);
  //         if (winer == null) {
  //           document.getElementById(listfixture[i].fixture.id).innerHTML = "";
  //         } else
  //           document.getElementById(listfixture[i].fixture.id).innerHTML = winer;
  //       }
  //       fetch(
  //         "https://api-football-v1.p.rapidapi.com/v3/odds?fixture=" +
  //           listfixture[i].fixture.id,
  //         options
  //       )
  //         .then((response) => response.json())
  //         .then((data) => handleodd(data));
  //       function handleodd(data) {
  //         let odddata = data;
  //         if (odddata.results == 0) {
  //           document.getElementById("odd" + listfixture[i].fixture.id).innerHTML =
  //             "";
  //         } else {
  //           console.log(odddata);
  //           var array = odddata.response[0].bookmakers;
  //           var check = true;
  //           while (check) {
  //             for (let y = 0; y < array.length; y++) {
  //               var findById = array[y].bets;
  //               for (let z = 0; z < findById.length; z++) {
  //                 var oddfound = findById[z];
  //                 if (oddfound.id == 21) {
  //                   check = false;
  //                   document.getElementById(
  //                     "odd" + listfixture[i].fixture.id
  //                   ).innerHTML = oddfound.values[0].odd;
  //                 } else {
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
}

export default CallApiFootballList;
