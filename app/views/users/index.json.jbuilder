json.array! @users do |user|
  json.id user.id
  json.name user.name
end

# json.current_user_id current_user.id
# json.current_user_name current_user.name
