# Schema Information

## users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null
password_digest| text      | not null
session_token  | integer   | not null, foreign key, indexed

## team_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references users)
user_id     | integer   | not null, foreign key (references notes)


## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null


## board_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references teams)
board_id    | integer   | not null, foreign key (references boards)

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## list_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references teams)
board_id    | integer   | not null, foreign key (references boards)

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## item_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references lists)
item_id     | integer   | not null, foreign key (references items)

## items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |

## comment_mappings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
item_id     | integer   | not null, foreign key (references items)
comment_id  | integer   | not null, foreign key (references comments)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
body        | string    | not null
