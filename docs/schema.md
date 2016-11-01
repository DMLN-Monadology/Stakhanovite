# Schema Information

## users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null
password_digest| text      | not null
session_token  | integer   | not null, foreign key, indexed
image_url      | string    |


## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null


## board_user_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references teams)
board_id    | integer   | not null, foreign key (references boards)

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
team_id     | integer   | not null, foreign key (references teams)
title       | string    | not null


## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards)
title       | string    | not null


## items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references lists)
title       | string    | not null
description | string    |


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
item_id     | integer   | not null, foreign key (references items)
body        | string    | not null
