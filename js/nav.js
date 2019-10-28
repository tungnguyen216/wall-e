// getElementsByClassName sẽ trả ra 1 mảng (tập hợp) các element có class là hamburger, tương tự với nav-list
// 1 mảng bắt đầu với vị trí thứ 0, nên để lấy element đầu tiên ta lấy [0]
var hamburger = document.getElementsByClassName('hamburger')[0]; 
var navList = document.getElementsByClassName('nav-list')[0];
// Khai báo isDisplayed với kiểu dữ liệu là boolean, có 2 giá trị true/false để xác định trạng thái của nav-list có đang hiển thị hay ko, ở trạng thái ban đầu ko hiển thị nên ta đặt là false
var isDisplayed = false;

hamburger.addEventListener('click', function() {
  // Đây là block điều kiện if (isDisplayed) tương đương với nêú isDisplayed === true => else là ngược lại
  if (isDisplayed) {
    // Nếu như nav-list đang hiển thị thì ta xoá class displayed đi.
    navList.classList.remove('displayed');
  } else {
    // Nếu nav-list đang ẩn thì add class displayed để hiển thị.
    navList.classList.add('displayed');
  }

  // Cập nhật trạng thái, dấu ! để phủ định trạng thái hiện tại, nếu isDisplayed đang = true, thì lúc này  sẽ thành false và ngược lại
  // isDisplayed = !isDisplayed;
});