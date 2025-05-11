document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // الحصول على بيانات المستخدم من النموذج
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // جلب بيانات المستخدم من localStorage
  const storedUserData = JSON.parse(localStorage.getItem(username));
  
  // التحقق من صحة اسم المستخدم وكلمة المرور
  if (storedUserData && storedUserData.password === password) {
    // تخزين اسم المستخدم لتحديد المستخدم المسجل
    localStorage.setItem('loggedInUser', username);
    
    // إعادة التوجيه إلى الصفحة الرئيسية (Dashboard)
    window.location.href = "dashboard.html";
  } else {
    // إظهار رسالة الخطأ إذا كانت البيانات غير صحيحة
    document.getElementById('error-message').style.display = "block";
  }
});