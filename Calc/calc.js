function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function clean() {
    document.form.textview.value =''
}
function back() {
    const exp = document.form.textview.value
    document.form.textview.value = exp.substring(0, exp.length-1)
}
function equal() {
    const exp = document.form.textview.value
    if(!isNaN(eval(exp))) {
       document.form.textview.value = eval(exp)
    } else {
        document.form.textview.value = 0
    }
}