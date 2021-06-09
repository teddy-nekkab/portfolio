$(document).ready(() => {
  $('form').submit((e) => {

    e.preventDefault()

    const formData = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      message: $('textarea[name="message"]').val(),
    };

    $.ajax({
      type: "POST",
      url: "https://usebasin.com/f/4fbdd9e3c86a.json",
      data: formData,
      dataType: "json",
      encode: true,
    })
      .done((data) => {
        if (data.success) {
          $('section[class="is-white"').html("<div class='container animate__animated animate__pulse'><h2 class='subtitle has-text-centered'>Votre message à bien étais envoyé. Je vous répondrais dans les plus brefs délais.</h2></div>");
        }
      });
  })
})
