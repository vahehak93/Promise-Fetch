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


