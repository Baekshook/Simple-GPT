async function checkPromise() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000);
    });

    let result = await promise;

    console.log(result2);
  } catch (error) {
    console.error(error);
  }

}

checkPromise();
