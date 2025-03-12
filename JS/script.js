// script slideShow
var slideIndex = 1;
        showDivs(slideIndex);
    
        function plusDivs(n) {
            showDivs(slideIndex += n);
        }
    
        function showDivs(n) {
            var i;
            var imgList = document.getElementsByClassName("img-slideshow");
    
            if (slideIndex > imgList.length) {
                slideIndex = 1;
            }
            if (slideIndex < 1) {
                slideIndex = imgList.length;
            }
    
            for (i = 0; i < imgList.length; i++) {
                imgList[i].style.display = 'none';
            }
    
            imgList[slideIndex - 1].style.display = 'block';
        }

        setInterval(() => {
            plusDivs(1);
        }, 2000)



// Script submit 
function validateForm(event) {
    event.preventDefault();

    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Nama tidak boleh kosong";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (birthDate === "") {
        document.getElementById("dateError").textContent = "Tanggal lahir tidak boleh kosong";
        valid = false;
    } else {
        document.getElementById("dateError").textContent = "";
    }

    if (gender === "") {
        document.getElementById("genderError").textContent = "Jenis kelamin harus dipilih";
        valid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    if (messages === "") {
        document.getElementById("massageError").textContent = "Pesan tidak boleh kosong";
        valid = false;
    } else {
        document.getElementById("massageError").textContent = "";
    }

    if (valid) {
        setSenderUI(name, birthDate, gender, messages);
    }
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = message;
}
