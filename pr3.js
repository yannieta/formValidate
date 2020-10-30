function validateForm() {
    const fname = document.form.fname.value;
    const lname = document.form.lname.value;
    const password = document.form.pass.value;
    const password1 = document.form.pass1.value;
    const select = document.querySelector(".myselect").value;
    const selectcity = document.querySelector(".selectcity").value;
    const gender = document.form.gender;
    const email = document.form.email.value
        // check dieu kien neu fname la chuoi rong se bao loi
    if (fname == "" || fname.length < 3 || fname.length > 30) {
        alert("Vui lòng nhập tên độ dài từ khoảng 3 đến 30");
        document.form.fname.focus();
        return false;
    }
    // check dieu kien neu lname la chuoi rong se bao loi

    if (lname == "" || lname.length < 3 || lname.length > 30) {
        alert("Vui lòng nhập họ độ dài từ khoảng 3 đến 30");
        document.form.lname.focus();
        return false;
    }
    // check dieu kien neu pw la chuoi rong se bao loi

    if (password == "" || password.length < 3 || password.length > 30) {
        alert("Vui lòng nhập mật khẩu");
        document.form.password.focus();
        return false;
    }
    // check dieu kien neu email la chuoi rong se bao loi

    if (email == "") {
        alert("Vui lòng nhâgp email")
        document.form.email.focus();
        return false;
    }
    // check dieu kien neu pw va nhap lai pư phai giong nhau

    if (password1 !== password) {
        alert("Mật khẩu không trùng khớp với mật khẩu trên");
        document.form.password1.focus();
        return false;
    }
    //check dieu kien neu chua chon gioi tinh se bao loi
    if ((gender[0].checked == false) && (gender[1].checked == false)) {
        alert("Vui lòng chọn giới tính");
        document.form.gender.focus();
        return false;
    }
    //check diue kien neu chua chon nam sinh va thanh pho  thi se bao loi
    if (select == "UnSelect") {
        alert("Vui lòng chọn năm sinh");
        document.form.type.focus();
        return false;
    }
    if (selectcity == "noSelect") {
        alert("Vui lòng chọn thành phố");
        document.form.type.focus();
        return false;
    }
    alert('Chúc mừng bạn đã đăng ký thành công'); // thoa tat ca dieu  kien tren

}