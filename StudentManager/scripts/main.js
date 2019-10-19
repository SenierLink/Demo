window.addEventListener("load", show_data)


/**
 * 以XHR发送请求，获得服务器数据
 * @returns {Array} 把每行数据作为一个元素，数据{object}，具有属性id，name，birthday，sex
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
                console.log(xhr.responseText);
                doDom(JSON.parse(xhr.responseText))
                return JSON.parse(xhr.responseText)
                // console.log(xhr.responseType)
                // for(let i = 0; i<xhr.responseText.length; i++){
                //     xhr.responseText[i] = JSON.parse(xhr.responseText[i])
                // }

            } else {
                alert("Request was unsuccessful:" + xhr.status);
            }
        }
    }
    
    xhr.open("GET", "./php/fetch_data.php", true)
    xhr.send()
}


function doDom(data){
    console.log(data)
    for(let i = 0; i<data.length; i++){
        var temp = data[i]
        
        var div = document.createElement("div")
        var p = document.createElement("p")
        p.innerText = temp.id + temp.name + temp.birthday + temp.sex
        div.appendChild(p)

        document.body.appendChild(div)
    }
}

/**
 * 以js操作dom显示data
 */
function show_data() {
    fetch_data()
    // var data = fetch_data()
    // console.log(data) :undifinde
    // 鬼知道xhr里面的return怎么返回的。反正在xhr的里面写handleonsuccess(本次用的doDom)就不会有问题。估计是console.log(data)的时候，还没return。鬼知道原因，差半天没查到。
}