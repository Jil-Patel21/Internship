"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cards = document.querySelector(".cards");
var alerts = document.querySelector(".alert");
var an = document.querySelector(".announcement");
function jsonCardFile() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./Json/card.json")];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data];
                case 3:
                    _a = _b.sent();
                    console.log("can't get card json File");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var res1 = jsonCardFile();
function jsonAlertFile() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./Json/alert.json")];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data];
                case 3:
                    _a = _b.sent();
                    console.log("can't get alert json File");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var res2 = jsonAlertFile();
function jsonAnnFile() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./Json/announcement.json")];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data];
                case 3:
                    _a = _b.sent();
                    console.log("can't get announcement json File");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var res3 = jsonAnnFile();
// for hamburgermenu option and onclick function
var hamburgermenu = document.querySelector(".hamburgermenu");
function myFunction() {
    var x = document.querySelector(".dashboardoption");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
hamburgermenu.addEventListener("click", myFunction);
// for resize screen (display dashboard option)
function resizefunction() {
    var hamburgermenu = document.querySelector(".item2");
    var hamburgermenudisplay = window.getComputedStyle(hamburgermenu).display;
    var dashboardoption = document.querySelector(".dashboardoption");
    var dashboardoptiondisplay = window.getComputedStyle(dashboardoption).display;
    if (hamburgermenudisplay === "none") {
        dashboardoption.style.display = "flex";
    }
    else if (hamburgermenudisplay !== "none" &&
        dashboardoptiondisplay === "flex") {
        dashboardoption.style.display = "none";
    }
}
window.addEventListener("resize", resizefunction);
// alert details
res2.then(function (alert) {
    var len = alert.alert.length;
    var bg = "background-color:white;";
    for (var i = 0; i < len; i++) {
        alerts.innerHTML += "<div class=\"alertdata\" style=\"".concat(alert.alert[i].bgcolor == 1 ? bg : "", "\">\n    <div class=\"alertflex\">\n      <div class=\"alertcontent\">").concat(alert.alert[i].content, "\n      </div>\n      <img src=\"").concat(alert.alert[i].image, "\" alt=\"\" class=\"alertimage\">\n  </div>\n  <div class=\"alertcourse\"><span>").concat(alert.alert[i].cource.course1, "</span>").concat(alert.alert[i].cource.msg, "</div>\n  <div class=\"alertdate\">").concat(alert.alert[i].date, "</div>\n  </div>");
    }
});
// announcement details
res3.then(function (ann) {
    var ln = ann.announcement.length;
    for (var i = 0; i < ln; i++) {
        an.innerHTML += "<div class=\"announcementdata\" ".concat(ann.announcement[i].bgcolor == 1 ? "style=background-color:white;" : "", ">\n  <div class=\"announcementflex\">\n    <div class=\"announcementname\">\n      <span>").concat(ann.announcement[i].name.designation, "</span>&nbsp;").concat(ann.announcement[i].name.fullname, "\n    </div>\n    <img\n      src=\"").concat(ann.announcement[i].image, "\"\n      alt=\"\"\n      class=\"announcementimage\"\n    />\n  </div>\n  <div class=\"announcementcontent\">").concat(ann.announcement[i].lecture, "</div>\n  <div class=\"announcementcourse\">").concat(ann.announcement[i].cource, "</div>\n  <div class=\"filedate\">\n    <div class=\"file\">\n     ").concat(ann.announcement[i].ig == 1
            ? "<img src=\"../images/fileAttach.png\" alt=\"\">&nbsp;"
            : "").concat(ann.announcement[i].files, "\n    </div>\n    <div class=\"announcementdate\">").concat(ann.announcement[i].date, "</div>\n  </div>\n</div>");
    }
});
// Card Details fetch
res1.then(function (card) {
    var cardlen = card.Carddetails.length;
    for (var i = 0; i < cardlen; i++) {
        cards.innerHTML += "\n      <div class=\"cardmain".concat(i + 1, "\">\n      ").concat(i == 3 ? "<div id=\"expired\">EXPIRED</div>" : "", "\n      <div class=\"card1\">\n          <img src=\"").concat(card.Carddetails[i].cardimage, "\">\n          <div class=\"carddetails\">\n              <div class=\"bigtext\" id=\"fav\">\n                  <div>").concat(card.Carddetails[i].heading, "</div>\n                  <img src=\"").concat(card.Carddetails[i].favimage, "\">\n              </div>\n              <div class=\"smalltext\">").concat(card.Carddetails[i].courseSubject, " | Grade ").concat(card.Carddetails[i].courseGrade, "<span style=\"padding-left: 0.2rem; color: #1F7A54;\">+").concat(card.Carddetails[i].additionalCourseGrade, "</span></div>\n              <div class=\"smalltext\"><span>").concat(card.Carddetails[i].courseLength.units, "</span> Units <span style=\"padding-left: 0.2rem;\">").concat(card.Carddetails[i].courseLength.lessons, "</span> Lessons <span style=\"padding-left: 0.2rem;\">").concat(card.Carddetails[i].courseLength.topics, "</span> Topics</div>\n              <div class=\"bigtext\" id=\"classdet\">\n                  <div ").concat(card.Carddetails[i].classoption === null
            ? " style=\"color:#686868\""
            : "", ">").concat(card.Carddetails[i].classoption !== null
            ? card.Carddetails[i].classoption
            : "No Classes", "</div>\n                  <img src=\"").concat(card.Carddetails[i].arrowimage, "\">\n              </div>\n              <div class=\"smalltext\">").concat(card.Carddetails[i].totalstudents, "</div>\n          </div>\n      </div>\n      <div class=\"symbol\">\n          <div><img src=\"").concat(card.Carddetails[i].previewimage, "\"></div>\n          <div class=\"lightimage\"><img src=\"").concat(card.Carddetails[i].manageimage, "\"></div>\n          <div class=\"lightimage\"><img src=\"").concat(card.Carddetails[i].gradeimage, "\"></div>\n          <div><img src=\"").concat(card.Carddetails[i].reportimage, "\"></div>\n      </div>\n     </div>");
    }
});
