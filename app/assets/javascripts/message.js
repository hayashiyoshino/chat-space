$(function() {
  function buildHTML(message){
    var html =
    `<div class="message" data-message-id="${message.id}">
       <div class="upper-message">
         <div class="upper-message__user-name">
           ${message.user_name}
         </div>
         <div class="upper-message__date">
         ${message.created_at}
         </div>
        </div>
        <div class="lower-message">
        <% if ${message.content}.present? %>
          <p class="lower-message__content">${message.content}</p>
          <%= image_tag ${add_image}, class: 'lower-message__image' if ${message.image}.present? %>
          <% end %>
        </div>
        </div>`;
        return html;
  }

  $('#new_message').on('submit', function(){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST"
      data: formData,
      dataType:'json',
      processData:false,
      contentType:false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      &('.form__message').val('')
    })
    .fail(function(){
      alert('error')
    })
  })
});
