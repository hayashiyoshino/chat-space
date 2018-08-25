json.array!(@messages) do |message|
  json.neme message.user.name
  json.content message.content
  json.time message.created_at
  json.image message.image
end

