## Component Hierarchy


**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home

**TeamsContainer**
 - Navbar
 - TeamsIndex
  + BoardIndex

**BoardContainer**
 - ListIndex
  + List

**ListContainer**
 - ItemIndex

**ItemContainer**
 - Item
 + Description
 + CommentsIndex

**CommentContainer**
 - CommentsIndex

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/teams" | "TeamsContainer" |
| "/home/teams/board/:boardId" | "BoardContainer" |
| "/home/teams/board/:boardId/list/:listId" | "ListContainer" |
| "/home/teams/board/:boardId/list/:listId/item/:itemId" | "ItemContainer" |
