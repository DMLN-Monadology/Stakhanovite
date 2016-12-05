export const signup = (user, success, error) => {
  $.ajax ({
    url: 'api/users',
    method: "POST",
    data: {user},
    success,
    error
  });
};

export const signin = (user, success, error) => {
  $.ajax ({
    url: 'api/session',
    method: "POST",
    data: {user},
    success,
    error
  });
};

export const signout = (success) => {
  $.ajax ({
    url: 'api/session',
    method: "DELETE",
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#signout");
    }
  });
};
