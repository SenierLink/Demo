window.addEventListener("load", show_data)


/**
 * 以XHR发送请求，获得服务器数据
 * @returns {Array} 把每行数据作为一个元素，数据{object}，具有属性id，name，birthday，sex
 */
function fetch_data() {
    //同步
    // var xhr = new XMLHttpRequest()
    // xhr.open(get, "../php/fetch_data.php", flase)
    // xhr.send
    // if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    //     alert(xhr.responseText);
    // } else {
    //     alert("Request was unsuccessful:" + xhr.status);
    // }

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                console.log(xhr.responseText);
            } else {
                alert("Request was unsuccessful:" + xhr.status);
            }
        }
    }

    xhr.open("GET", "./php/fetch_data.php", true)
    xhr.send()
}


/**
 * 以js操作dom显示data
 */
function show_data() {
    fetch_data()
}