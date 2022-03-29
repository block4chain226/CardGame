const categoryUrl = "http://localhost:3000/category";
const userUrl = "http://localhost:3000/user/622b976ec9ad424681655ed3";
const allUsersUrl = "http://localhost:3000/user";
// async function getCategories(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error("error: ", err);
//   }
// }

async function getUser(url) {
  try {
    const response = await fetch(url);
    const data = response.json(response);
    return data;
  } catch (err) {
    console.error("error: ", err);
  }
}
const showUser = () => {
  getUser(userUrl).then((data) => {
    if (data.data !== null) {
      document.forms[0].elements.email.placeholder = data.data.name;
    }
  });
};

async function getAllUsers(url) {
  try {
    const response = await fetch(url);
    const data = response.json(response);
    return data;
  } catch (err) {
    console.error("error", err);
  }
}

const showAllUsers = () =>
  getAllUsers(allUsersUrl).then((data) => {
    for (let [key, value] of Object.entries(data.answer)) {
      console.log(key, value);
      const p = addElement("p");
      p.textContent = value.name + " " + value.email;
      appendChild(document.body, p);
    }
  });

function addElement(element) {
  return document.createElement(element);
}
function appendChild(parent, child) {
  return parent.append(child);
}

// export const addButtons = () =>
//   getCategories(categoryUrl).then((data) => {
//     for (let [key, value] of Object.entries(data.category)) {
//       console.log(key, value);
//       const button = addElement("button");
//       button.textContent = value;
//       button.id = key;
//       button.dataset.field = value;
//       appendChild(document.body, button);
//       console.log(button);
//     }
//   });
// addButtons();

//showUser();
showAllUsers();
