document.addEventListener('DOMContentLoaded', function() {
    // 社交媒体按钮点击事件
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });
 
     // 表单提交事件
     const contactForm = document.getElementById('contact-form');
     if (contactForm) {
         contactForm.addEventListener('submit', function(e) {
             e.preventDefault();
             alert('留言已发送！');
             this.reset();
         });
     }
 
     // 主题切换按钮事件
     const themeToggle = document.querySelector('.theme-toggle');
     if (themeToggle) {
         themeToggle.addEventListener('click', function() {
             document.body.classList.toggle('dark-theme');
         });
     }
 
     // 回到顶部按钮功能
     const backToTopButton = document.getElementById('back-to-top');
     if (backToTopButton) {
         // 检查页面加载时是否需要显示按钮
         if (window.pageYOffset > 300) {
             backToTopButton.classList.add('show');
         }
 
         // 当页面滚动时检查是否需要显示按钮
         window.addEventListener('scroll', function() {
             if (window.pageYOffset > 100) {
                 backToTopButton.classList.add('show');
             } else {
                 backToTopButton.classList.remove('show');
             }
         });
 
         // 点击按钮回到顶部
         backToTopButton.addEventListener('click', function() {
             window.scrollTo({
                 top: 0,
                 behavior: 'smooth'
             });
         });
     }
 
     // 平滑滚动到指定部分
     const navLinks = document.querySelectorAll('nav a');
     navLinks.forEach(link => {
         link.addEventListener('click', function(e) {
             e.preventDefault();
             const targetId = this.getAttribute('href').substring(1);
             const targetElement = document.getElementById(targetId);
             if (targetElement) {
                 const headerHeight = document.querySelector('header').offsetHeight;
                 const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
 
                 window.scrollTo({
                     top: targetPosition,
                     behavior: 'smooth'
                 });
             }
         });
     });
 });