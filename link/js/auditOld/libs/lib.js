// import PromiseW from 'promise-polyfill';
//
// // To add to window
// if (!window.Promise) {
//     window.Promise = PromiseW;
// }
export function httpPost(url, body) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (this.status == 200) {
                resolve((this.response));
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send(body);
    });
}

