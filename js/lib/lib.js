/**
 * Created by bad4iz on 18.04.2017.
 */
function httpPost(url, body, calback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (this.status == 200) {
            calback(this.response);
        } else {
            let error = new Error(this.statusText);
            error.code = this.status;
            console.log(error);
        }
    };
    xhr.onerror = function () {
        reject(new Error("Network Error"));
    };
    xhr.send(body);
}