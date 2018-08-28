$(function() {

  class User{

  }

  const User = function() {
    var search_list =$("#user-search-result");
  }

  User.prototype.appendUser = function (user) {
    var html = `
    <div class="chat-group-users clearfix" id="chat-group-user-22">
      <input name="group[user_ids][]" type="hidden" value="1">
      <p class="chat-group-user__name">
      ${user.name}
      </p>
    </div>`
    search_list.append(html);
  }

  User.prototype.appendNoUser = function(user) {
    var html = `
    <div class="chat-group-users clearfix" id="chat-group-user-22">
      <input name="group[user_ids][]" type="hidden" value="1">
      <p class="chat-group-user__name">
      "Nothing such as user !!!"
      </p>
    </div>`
  }


  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#chat-group-users").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});
