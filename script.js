

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".location_smooth").addEventListener("click", function () {
        document.getElementById("location").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".product_smooth").addEventListener("click", function () {
        document.getElementById("product").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".progress_smooth").addEventListener("click", function () {
        document.getElementById("progress").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".policy_smooth").addEventListener("click", function () {
        document.getElementById("policy").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".news_smooth").addEventListener("click", function () {
        document.getElementById("news").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact_smooth").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".zone-btn");
    const zones = document.querySelectorAll(".zone-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            document.querySelector(".zone-btn.active")?.classList.remove("active");
            this.classList.add("active");

            zones.forEach(item => item.classList.remove("active"));

            const zone = this.getAttribute("data-zone");
            document.getElementById(zone).classList.add("active");
        });
    });

    buttons[0].classList.add("active");
    zones[0].classList.add("active");
});

let index = 0;
        function autoSlide() {
            const slideContainer = document.getElementById("slide-container");
            index = (index + 1) % 10;
            slideContainer.style.transform = `translateX(-${index * 10}%)`;
        }
        setInterval(autoSlide, 3000);

setTimeout(function() {
    const popup = document.getElementById("popup");
    popup.classList.add('show');
}, 3000); 

document.addEventListener('click', function(event) {
    const popup = document.getElementById("popup");
    const formContent = document.querySelector('.popup-content');
    
    if (!formContent.contains(event.target)) {
        popup.classList.remove('show');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn").addEventListener("click", function () {
        console.log("Nút đăng ký được nhấn!"); // Kiểm tra xem nút có hoạt động không

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            console.log("Thiếu thông tin, không gửi!");
            return;
        }

        console.log("Dữ liệu gửi đi:", { name, email, phone });

        fetch("https://script.google.com/macros/s/AKfycbx2MTgUmisyQP8yMEs9ip5Zzi1eucxbdktI8vN3EPSWV_78dVaEnDuSnIwY_Z3w1McRFQ/exec", {
            method: "POST",
            mode: "no-cors",  // Cách này bỏ qua kiểm tra CORS
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        .then(() => {
            alert("Đăng ký thành công!");
            document.getElementById("form").reset();
        })
        .catch(error => {
            alert("Có lỗi xảy ra: " + error);
        });
        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn2").addEventListener("click", function () {
        console.log("Nút đăng ký được nhấn!"); // Kiểm tra xem nút có hoạt động không

        var name = document.getElementById("name2").value.trim();
        var email = document.getElementById("email2").value.trim();
        var phone = document.getElementById("phone2").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            console.log("Thiếu thông tin, không gửi!");
            return;
        }

        console.log("Dữ liệu gửi đi:", { name, email, phone });

        fetch("https://script.google.com/macros/s/AKfycbx2MTgUmisyQP8yMEs9ip5Zzi1eucxbdktI8vN3EPSWV_78dVaEnDuSnIwY_Z3w1McRFQ/exec", {
            method: "POST",
            mode: "no-cors",  // Cách này bỏ qua kiểm tra CORS
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        .then(() => {
            alert("Đăng ký thành công!");
            document.getElementById("form").reset();
        })
        .catch(error => {
            alert("Có lỗi xảy ra: " + error);
        });
        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn3").addEventListener("click", function () {
        console.log("Nút đăng ký được nhấn!"); // Kiểm tra xem nút có hoạt động không

        var name = document.getElementById("name3").value.trim();
        var email = document.getElementById("email3").value.trim();
        var phone = document.getElementById("phone3").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            console.log("Thiếu thông tin, không gửi!");
            return;
        }

        console.log("Dữ liệu gửi đi:", { name, email, phone });

        fetch("https://script.google.com/macros/s/AKfycbx2MTgUmisyQP8yMEs9ip5Zzi1eucxbdktI8vN3EPSWV_78dVaEnDuSnIwY_Z3w1McRFQ/exec", {
            method: "POST",
            mode: "no-cors",  // Cách này bỏ qua kiểm tra CORS
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        .then(() => {
            alert("Đăng ký thành công!");
            document.getElementById("form").reset();
        })
        .catch(error => {
            alert("Có lỗi xảy ra: " + error);
        });
        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn4").addEventListener("click", function () {
        console.log("Nút đăng ký được nhấn!"); // Kiểm tra xem nút có hoạt động không

        var name = document.getElementById("name4").value.trim();
        var email = document.getElementById("email4").value.trim();
        var phone = document.getElementById("phone4").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            console.log("Thiếu thông tin, không gửi!");
            return;
        }

        console.log("Dữ liệu gửi đi:", { name, email, phone });

        fetch("https://script.google.com/macros/s/AKfycbx2MTgUmisyQP8yMEs9ip5Zzi1eucxbdktI8vN3EPSWV_78dVaEnDuSnIwY_Z3w1McRFQ/exec", {
            method: "POST",
            mode: "no-cors",  // Cách này bỏ qua kiểm tra CORS
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        .then(() => {
            alert("Đăng ký thành công!");
            document.getElementById("form").reset();
        })
        .catch(error => {
            alert("Có lỗi xảy ra: " + error);
        });
        
    });
});

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.querySelector('.menu-overlay');

  const toggleMenu = () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('show');
  };

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  navMenu.querySelectorAll('a, div').forEach(item => {
    item.addEventListener('click', toggleMenu);
  });
















