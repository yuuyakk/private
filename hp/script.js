
$(function () {
  // ハンバーガーメニューのメニューボタンをクリックした時の処理
  $('.menu-btn').click(function () {
    $('.menu-list').css('transform', 'translateY(0%)');
    $('.menu-btn').css('display', 'none');
    $('.close-btn').css('display', 'block');
    $('.back-img').css('display', 'block');
  });

  // ハンバーガーメニューのクローズボタンをクリックした時の処理
  $('.close-btn').click(function () {
    $('.menu-list').css('transform', 'translateY(calc(-100%))');
    $('.close-btn').css('display', 'none');
    $('.menu-btn').css('display', 'block');
    $('.back-img').css('display', 'none');
  });

});