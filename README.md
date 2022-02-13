# Promise | Fetch

> Bellow is the Github link for all done homeworks.

[Promise | Fetch](https://github.com/vahehak93/Promise-Fetch.git)

---

> Tasks 

***Task 1***\
 promise

 ```javascript
function func() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      rej(new Error("ERORRRRR"));
    }, 1000);
  });
}

const p = func();

p.then((result) => {
  alert(result);
})
  .then(() => {
    return 1;
  })
  .catch((error) => {
    alert(error);
  });

```
***Task 2***\
fetch

```javascript
const dataSource = "https://restcountries.com/v3.1/all";

const searchedName = document.getElementById("search_elem");

fetch(dataSource)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getData(data);
    console.log(data);
  });

function getData(data) {
  countryName = data.map((elem) => elem.name.common);
  flag = data.map((elem) => elem.flags.png);
  population = data.map((elem) => parseInt(elem.population));
  continent = data.map((elem) => elem.continents);
}

function searchFunction() {
  for (let i = 0; i < countryName.length; i++) {
    if (
      countryName[i].toLowerCase().includes(searchedName.value) &&
      searchedName.value.length > 0
    ) {
      let div = document.createElement("div");
      div.id = "res";
      let getDiv = document.getElementById("res");

      
      let name = document.getElementById("name_content");
      let img = document.createElement("img");
      img.id = "flag";
      img.src = flag[i];

      name.append(countryName[i]);
      name.append(img);
      
    }
  }
}

```