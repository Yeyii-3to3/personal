'use strict';



// 元素切换函数
const elementToggleFunc = function (elem) { elem.classList.toggle("active");};



// 侧边栏相关变量
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// 移动端侧边栏切换功能
sidebarBtn.addEventListener("click", function () {elementToggleFunc(sidebar);});