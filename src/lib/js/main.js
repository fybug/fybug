require('../css/font-awesome.css');
require('../css/main.pcss');
require('./lib/vhannels/vhannels.tool');

// 项目公共 js
/* foundation 初始化 */
$(() => {
    let a = document.createElement("script");
    document.body.appendChild(a);
    a.innerHTML = "$(document).foundation();";
});