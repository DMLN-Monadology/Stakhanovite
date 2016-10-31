```js

{
  currentUser: {
    id: 1906,
    username: "Alexey-Stakhanov",
    teams: {
      ...
    }
  },
  Teams: {
    1: {
      title: "Personal Boards",
      Boards: {
        1: {
          id: 1,
          name: "Trello Cloning Project"
        }
        2: {
          id: 2,
          name: "Welcome Board"
        }
        3: {
          id: 3,
          name: "Create new Board..."
        }
      }
    }
  },
  Board: {
    title: "Trello Cloning Project",
    team_id: 1,
    Lists: {
      1: {
        id: 1,
        name: "Incomplete MVP Features",
        ItemIndex: [Boards, Lists & Cards, Sharing Boards, etc...]
      }
      2: {
        id: 2,
        name: "MVP Features to Review",
        ItemIndex: []
      }
    }
  },
  Item: {
    title: "Bonus: Hotkeys",
    list_id: 1,
    description: "Bonus? You made it here? really?",
    Comments: {
      1: {
        id: 1,
        author_id: 1,
        body: "these keys are too hot"
      }
      2: {
        id: 2,
        author_id: 2,
        body: "Ask Kevin for mittens"
      }
    }
  }
}
```
