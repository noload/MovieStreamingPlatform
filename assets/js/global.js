const addEventOnElements=function (elements,eventType,callback) {
    for (const ele of elements) {
        ele.addEventListener(eventType,callback);
    }
}