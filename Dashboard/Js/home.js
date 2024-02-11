// const cards = document.querySelector(".cards");
// const alerts = document.querySelector(".alert");
// const an = document.querySelector(".announcement");

// async function jsonCardFile() {
//   try {
//     const response = await fetch("./Json/card.json");
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log("can't get card json File");
//   }
// }
// const res1 = jsonCardFile();

// async function jsonAlertFile() {
//   try {
//     const response = await fetch("./Json/alert.json");
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log("can't get alert json File");
//   }
// }
// const res2 = jsonAlertFile();

// async function jsonAnnFile() {
//   try {
//     const response = await fetch("./Json/announcement.json");
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log("can't get announcement json File");
//   }
// }
// const res3 = jsonAnnFile();


// // for hamburgermenu option and onclick function

// const hamburgermenu = document.querySelector(".hamburgermenu");

// function myFunction() {
//   const x = document.querySelector(".dashboardoption");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// hamburgermenu.addEventListener("click", myFunction);

// // for resize screen (display dashboard option)

// function resizefunction() {
//   const hamburgermenu = document.querySelector(".item2");
//   let hamburgermenudisplay = window.getComputedStyle(hamburgermenu).display;
//   const dashboardoption = document.querySelector(".dashboardoption");
//   let dashboardoptiondisplay = window.getComputedStyle(dashboardoption).display;
//   if (hamburgermenudisplay === "none") {
//     dashboardoption.style.display = "flex";
//   } else if (
//     hamburgermenudisplay !== "none" &&
//     dashboardoptiondisplay === "flex"
//   ) {
//     dashboardoption.style.display = "none";
//   }
// }

// window.addEventListener("resize", resizefunction);

// // alert details

// res2.then((alert) => {
//   const len = alert.alert.length;
//   const bg = "background-color:white;";

//   for (let i = 0; i < len; i++) {
//     alerts.innerHTML += `<div class="alertdata" style="${
//       alert.alert[i].bgcolor == 1 ? bg : ""
//     }">
//     <div class="alertflex">
//       <div class="alertcontent">${alert.alert[i].content}
//       </div>
//       <img src="${alert.alert[i].image}" alt="" class="alertimage">
//   </div>
//   <div class="alertcourse"><span>${alert.alert[i].cource.course1}</span>${
//       alert.alert[i].cource.msg
//     }</div>
//   <div class="alertdate">${alert.alert[i].date}</div>
//   </div>`;
//   }
// });

// // announcement details

// res3.then((ann) => {
//   const ln = ann.announcement.length;
//   for (let i = 0; i < ln; i++) {
//     an.innerHTML += `<div class="announcementdata" ${
//       ann.announcement[i].bgcolor == 1 ? `style=background-color:white;` : ``
//     }>
//   <div class="announcementflex">
//     <div class="announcementname">
//       <span>${ann.announcement[i].name.designation}</span>&nbsp;${
//       ann.announcement[i].name.fullname
//     }
//     </div>
//     <img
//       src="${ann.announcement[i].image}"
//       alt=""
//       class="announcementimage"
//     />
//   </div>
//   <div class="announcementcontent">${ann.announcement[i].lecture}</div>
//   <div class="announcementcourse">${ann.announcement[i].cource}</div>
//   <div class="filedate">
//     <div class="file">
//      ${
//        ann.announcement[i].ig == 1
//          ? `<img src="../images/fileAttach.png" alt="">&nbsp;`
//          : ``
//      }${ann.announcement[i].files}
//     </div>
//     <div class="announcementdate">${ann.announcement[i].date}</div>
//   </div>
// </div>`;
//   }
// });

// // Card Details fetch

// res1.then((card) => {
//   const cardlen = card.Carddetails.length;
//   for (let i = 0; i < cardlen; i++) {
//     cards.innerHTML += `
//       <div class="cardmain${i + 1}">
//       ${i == 3 ? `<div id="expired">EXPIRED</div>` : ""}
//       <div class="card1">
//           <img src="${card.Carddetails[i].cardimage}">
//           <div class="carddetails">
//               <div class="bigtext" id="fav">
//                   <div>${card.Carddetails[i].heading}</div>
//                   <img src="${card.Carddetails[i].favimage}">
//               </div>
//               <div class="smalltext">${
//                 card.Carddetails[i].courseSubject
//               } | Grade ${
//       card.Carddetails[i].courseGrade
//     }<span style="padding-left: 0.2rem; color: #1F7A54;">+${
//       card.Carddetails[i].additionalCourseGrade
//     }</span></div>
//               <div class="smalltext"><span>${
//                 card.Carddetails[i].courseLength.units
//               }</span> Units <span style="padding-left: 0.2rem;">${
//       card.Carddetails[i].courseLength.lessons
//     }</span> Lessons <span style="padding-left: 0.2rem;">${
//       card.Carddetails[i].courseLength.topics
//     }</span> Topics</div>
//               <div class="bigtext" id="classdet">
//                   <div ${
//                     card.Carddetails[i].classoption === null
//                       ? ` style="color:#686868"`
//                       : ``
//                   }>${
//       card.Carddetails[i].classoption !== null
//         ? card.Carddetails[i].classoption
//         : `No Classes`
//     }</div>
//                   <img src="${card.Carddetails[i].arrowimage}">
//               </div>
//               <div class="smalltext">${card.Carddetails[i].totalstudents}</div>
//           </div>
//       </div>
//       <div class="symbol">
//           <div><img src="${card.Carddetails[i].previewimage}"></div>
//           <div class="lightimage"><img src="${
//             card.Carddetails[i].manageimage
//           }"></div>
//           <div class="lightimage"><img src="${
//             card.Carddetails[i].gradeimage
//           }"></div>
//           <div><img src="${card.Carddetails[i].reportimage}"></div>
//       </div>
//      </div>`;
//   }
// });

