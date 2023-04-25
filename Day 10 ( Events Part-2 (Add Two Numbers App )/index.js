function calSum() {
    const a = document.getElementById("val1").value;
    const b = document.getElementById("val2").value;
    const sum = parseInt(a) + parseInt(b);
    document.getElementById("result").innerHTML = "Sum : " + sum
}
function resetCalcy() {

    document.getElementById("result").innerHTML = "Sum : ";
    document.getElementById("val1").value = "";
    document.getElementById("val2").value = "";

}