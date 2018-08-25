$(function() {
  function buildHTML(message){
              // <%= image_tag ${add_image}, class: 'lower-message__image' if ${message.image}.present? %>
              // <% if ${message.content}.present? %>
    // var img = ""
    // if () {
    //   img = `<img scr="${message.image}">`
    // }
    // ${img}
    var html =
    `<div class="message" data-message-id="${message.id}">
       <div class="upper-message">
         <div class="upper-message__user-name">
           ${message.user_name}
         </div>
         <div class="upper-message__date">
         ${message.time}
         </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">${message.content}</p>
        </div>
        </div>`;
        return html;
  }
  //buttonの有効化d disabledを消せば良い
  //form reset jqueryでformまるごと初期化
  //scroll
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('');
    })
    .fail(function(){
      alert('error')
    })
  })
});
