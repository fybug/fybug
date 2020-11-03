require("../css/main.pcss");

let key = vhannels.tool.getQueryString("kpl", "");

if (key === "addp") {
    let dom = document.querySelector("#gerenxinxi")
    dom.innerHTML = `<ul>
                    <li><p>城市：广东东莞</p></li>
                    <li><p>期待岗位：<b>java, php 后台开发</b></p></li>
                    <li><p>邮箱：<b><u>1006291762@qq.com</u></b></p></li>
                    <li><p>电话：<b><u>13712097117</u></b></p></li>
                </ul>`
    dom = document.querySelector("#gerengengai")
    dom.innerHTML = `毕业于东莞职业技术学院，有着坚实的计算机基础知识以及开发经验。`

    dom = document.querySelector("#jiaoyubeijin")
    dom.innerHTML = `<table>
                    <tr>
                        <td>2018~2021</td>
                        <td><b>东莞职业技术学院</b></td>
                        <td>计算机应用技术 3+2 对接</td>
                    </tr>
                    <tr>
                        <td>2017.07~2017.09</td>
                        <td><b>台湾建国科技大学</b></td>
                        <td>台湾班课程专班–智慧化行动服务</td>
                    </tr>
                    <tr>
                        <td>2015~2018</td>
                        <td><b>东莞经济贸易学院</b></td>
                        <td>计算机应用技术</td>
                    </tr>
                </table>`
}