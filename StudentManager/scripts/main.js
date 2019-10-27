window.addEventListener("load", show_data)


/**
 * 以XHR发送请求，获得服务器数据
 * @returns {[{id,name,birthday,sex}]} 把每行数据作为一个元素，数据{object}，具有属性id，name，birthday，sex
 */
function fetch_data() {
    // 同步
    // var xhr = new XMLHttpRequest()
    // xhr.open("get", "../php/fetch_data.php", "flase")
    // xhr.send
    // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    //     return JSON.parse(xhr.responseText)
    // } else {
    //     alert("Request was unsuccessful:" + xhr.status);
    // }

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                doDom(JSON.parse(xhr.responseText))
                // return JSON.parse(xhr.responseText)

            } else {
                alert("Request was unsuccessful:" + xhr.status);
            }
        }
    }
    
    xhr.open("GET", "./php/fetch_data.php", true)
    xhr.send()
}

/**
 * 操作dom显示数据，使用了jquery，想了想，xml这些还是用js，dom这块用下jquery好了。
 * @param {[{id,name,birthday,sex}]} data 
 */
function doDom(data){
    for(let i = 0; i<data.length; i++){
        var temp = data[i]
        
        var template = $("#row_header").clone()
        // console.log(template.children())
        template.children()[0].innerText = temp.name
        template.children()[1].innerText = temp.birthday
        template.children()[2].innerText = temp.sex
        // console.log(template.children())
        $("div.container").append(template)
    }
}

/**
 * 以js操作dom显示data
 */
function show_data() {
    fetch_data()


    // var data = fetch_data()
    // console.log(data) :undefined
    // 鬼知道xhr里面的return怎么返回的。反正在xhr的里面写handleonsuccess(本次用的doDom)就不会有问题。估计是console.log(data)的时候，还没return。鬼知道原因，差半天没查到。
    // 奥，我懂了，因为在这里的return是onreadystatuschange()的返回值，而data接收的是fetch_data的返回值。

}