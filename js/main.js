$(document).ready(() => {

  const $burger = $('.navbar-burger');
  const $menu = $('.navbar-menu');

  $(document).click((e) => {
    if(!$burger.is(e.target) && $burger.has(e.target).length === 0 && !$menu.is(e.target) && $menu.has(e.target).length === 0) {
      $burger.removeClass('is-active');
      $menu.removeClass('is-active');
    }
  });

  $burger.click(() => {
    $burger.addClass('is-active')
    $menu.addClass('is-active')
  });
});
