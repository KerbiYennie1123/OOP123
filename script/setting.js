// scroll here


const scrollUpBtn = document.getElementById('scroll-up-btn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// menu here

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const sidebar = document.querySelector('#phone-sidebar');
  const sidebarDim = document.querySelector('.sidebar-dim');
  const closeButton = document.querySelector('#sidebar-close-btn');
  const myProfileLink = document.querySelector('#my-profile-link');
  hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarDim.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarDim.style.display = 'none';
  });

  sidebarDim.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarDim.style.display = 'none';
  });

  myProfileLink.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarDim.style.display = 'none';
  });
});



// profile settings here

function openProfilePopup() {
    document.getElementById("wmProfilePopup").style.display = "flex";
}

// close

function closeProfilePopup() {
    document.getElementById("wmProfilePopup").style.display = "none";
}



// logout here


function logout() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    window.location.href = "index.html";
  }
}


// picture preview here ng pfp

document.getElementById("wm-profile-pic").addEventListener("change", function () {
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("wm-profile-pic-preview").src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
});

document.getElementById("wm-profile-pic-preview").addEventListener("click", function () {
    document.getElementById("wm-profile-pic").click();
});


document.getElementById("wm-change-cover-btn").addEventListener("click", function () {
  document.getElementById("wm-cover-pic").click();
});

document.getElementById("wm-cover-pic").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("wm-profile-cover-box").style.backgroundImage = `url('${e.target.result}')`;
  };
  if (this.files[0]) {
    reader.readAsDataURL(this.files[0]);
  }
});


function updateProfile(newPicUrl, newUsername) {
  document.querySelectorAll('#wm-header-pic, .wm-profile-pic').forEach(pic => {
    pic.src = newPicUrl;
  });

  document.querySelectorAll('#wm-header-name, .wm-profile-name').forEach(name => {
    name.textContent = newUsername;
  });
}

document.getElementById('wm-profile-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('wm-username').value;
    const fullName = document.getElementById('wm-fname').value;
    const email = document.getElementById('wm-email').value;
    const phone = document.getElementById('wm-contact').value;
    const location = document.getElementById('wm-location').value;

    document.getElementById('wm-name-display').textContent = username;
    document.getElementById('wm-fname-display').textContent = fullName;
    document.getElementById('wm-email-display').textContent = email;
    document.getElementById('wm-phone-display').textContent = phone;
    document.getElementById('wm-location-display').textContent = location;

    alert("Profile updated successfully!");
  });



// here masasave 
document.getElementById("wm-profile-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("wm-username").value || "@cheese";
    const fullName = document.getElementById("wm-fname").value || "William Kirby";
    const email = document.getElementById("wm-email").value || "william_burger@gmail.com";
    const phone = document.getElementById("wm-contact").value || "09123456789";
    const location = document.getElementById("wm-location").value || "Bulacan, Malolos City";
    const profilePic = document.getElementById("wm-profile-pic-preview").src;

    // profilein header here and par amag update
    document.getElementById("wm-header-name").textContent = username;
    document.getElementById("wm-header-pic").src = profilePic;

    // and here nmn sa profile settings
    document.getElementById("wm-name-display").textContent = username;
    document.getElementById("wm-fname-display").textContent = fullName;
    document.getElementById("wm-email-display").textContent = email;
    document.getElementById("wm-phone-display").textContent = phone;
    document.getElementById("wm-location-display").textContent = location;

    // here the shippinglocation
    document.getElementById("wm-cart-location").textContent = location;

    closeProfilePopup();
    alert("Profile updated successfully!");
});






function editpass() {
  alert('Comming soon!');
}




function toggleProfileMenu() {
    let profileMenu = document.getElementById('wm-profile-menu');
    profileMenu.style.display = profileMenu.style.display === 'none' ? 'block' : 'none';
}

function openProfilePopup() {
    let profilePopup = document.getElementById('wmProfilePopup');
    profilePopup.style.display = 'block';
    let profileMenu = document.getElementById('wm-profile-menu');
    profileMenu.style.display = 'none';
}

// function closeProfilePopup() {
//     let profilePopup = document.getElementById('wmProfilePopup');
//     profilePopup.style.display = 'none'; 
// }





// thank you alert here

  function submitEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    if (email) {
      alert(`Thank you, we will notify you ${email}we will notify you when we release new item!`) ;
      emailInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  }


