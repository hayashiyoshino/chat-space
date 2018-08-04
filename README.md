# chat-space

By Hayashi

Chat-space is an instant messaging and collaboration system.

##database design

## members table

|Column   |Type   |Options                       |
|---------|-------|------------------------------|
|user_id  |integer|null: false, foreign_key: true|
|group_id |integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## users table

|Column   |Type   |Options                             |
|---------|-------|------------------------------------|
|name     |string |null: false                         |
|email    |string |null: false, add_index, unique: true|

### Association
- has_many :messages
- has_many :groups, through: :members


## groups table

|Column    |Type   |Option                              |
|----------|-------|------------------------------------|
|group_name|string |null: false, add_index, unique: true|

### Association
- has_many :messages
- has_many :users, through: :members


##messages table

|Column   |Type   |Option                        |
|---------|-------|------------------------------|
|body     |text   |null: false                   |
|image    |string |                              |
|group_id |integer|null: false, foreign_key: true|
|user_id  |integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



