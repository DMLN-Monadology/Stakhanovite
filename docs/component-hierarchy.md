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
 - Navbar
 - ListIndex
  + List
  + ItemIndex

**ItemContainer**
 - Navbar
 - Item
 + Description
 + CommentsIndex

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
