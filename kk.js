// 1. ดึงปุ่มจาก HTML มาเก็บไว้ในตัวแปร btn (อย่าลืมเปลี่ยน 'myBtn' ให้ตรงกับ id ของคุณ)
const btn = document.getElementById("myBtn");

// 2. สั่งให้ทำงานเมื่อมีการเลื่อนหน้าจอ (Scroll)
window.onscroll = function () {
    // ถ้าเลื่อนลงมามากกว่า 200px ให้แสดงปุ่ม (block) ถ้าไม่ถึงให้ซ่อนไว้ (none)
    btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
        ? 'block' 
        : 'none';
};