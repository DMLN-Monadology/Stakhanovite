# API Endpoints

## HTML API

###Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Teams  

- `GET /api/teams`
- `GET /api/teams/:id/boards`
- `POST /api/teams`
- `PATCH /api/teams/:id`
- `DELETE /api/teams/:id`

### Boards   

- `GET /api/boards/:id/lists`
- `POST /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`

### Lists   

- `GET /api/lists/:id/items`
- `POST /api/lists/:id`
- `PATCH /api/lists/:id`
- `DELETE /api/lists/:id`

### Items   

- `GET /api/items/:id`
- `GET /api/items/:id/comments`
- `POST /api/items/:id`
- `PATCH /api/items/:id`
- `DELETE /api/items/:id`

### Comments   

- `GET /api/comments/:id`
- `POST /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`
