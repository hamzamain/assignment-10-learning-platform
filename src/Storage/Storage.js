const addToDb = (id, email, name, cvc, date, cradit) => {
  const info = { email, name, cvc, date, cradit };
  const users = getFromStorage();
  const exist = users.find((user) => user.id === id);
  if (!exist) {
    const newUser = { id, info };
    const newUsersArray = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(newUsersArray));
  } else {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

const getFromStorage = () => {
  let users;
  const storedJson = localStorage.getItem("users");
  const stored = JSON.parse(storedJson);
  if (stored) {
    return (users = stored);
  } else {
    return (users = []);
  }
};

export { addToDb, getFromStorage };
