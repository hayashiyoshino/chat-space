$(function() {

  var search_list = $("#chat-group-users");

  function appendUser(user) {
    var html = `
    <div id="chat-group-user-22" class="chat-group-users clearfix">
      <input name="group[user_ids][]" type="hidden" value="1">
      <p class="chat-group-user__name">
      ${user.name}
      </p>
      </div>`
      search_list.append(html);
  }

  function appendNoUser(user) {
    var html = `
    <div id="chat-group-user-22" class="chat-group-users clearfix">
      <input name="group[user_ids][]" type="hidden" value="1">
      <p class="chat-group-user__name">
      "Nothing such as user!!!"
      </p>
    </div>`
    search_list.append(html);
  }


  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    var inputs = input.split(" ").filter(function(e) { return e; });
    var newInputs = inputs.map(editElement);
    var word = newInputs.join("|");
    var reg = RegExp(word);
    if (word != preWord) {
      $("#chat-group-user-22").remove();
      if(input.length !== 0) {
        $.each(users, function(i, users))
      }
    }
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#chat-group-user-22").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendDoUser("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});


