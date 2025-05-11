function registerUser() {
  const username = document.getElementById("new-username").value.trim();
  const email = document.getElementById("new-email").value.trim();
  const password = document.getElementById("new-password").value;
  
  if (!username || !email || !password) {
    alert("يرجى ملء كل الحقول");
    return false;
  }
  
  if (localStorage.getItem(username)) {
    alert("اسم المستخدم موجود بالفعل");
    return false;
  }
  
  const user = {
    username,
    email,
    password
  };
  
  localStorage.setItem(username, JSON.stringify(user));
  localStorage.setItem("loggedInUser", username);
  alert("تم إنشاء الحساب بنجاح!");
  window.location.href = "dashboard.html";
  return false;
}

function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  
  const userData = localStorage.getItem(username);
  if (!userData) {
    alert("المستخدم غير موجود");
    return false;
  }
  
  const user = JSON.parse(userData);
  if (user.password === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
    return false;
  } else {
    alert("كلمة المرور غير صحيحة");
    return false;
  }
}