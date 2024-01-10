// function successCallback(result) {
//   console.log(`Audio file ready at URL: ${result}`);
// }

// function failureCallback(error) {
//   console.log(`Error generating audio file: ${error}`);
// }

// createAudioFileAsync(audioSettings, successCallback, failureCallback);

// function doSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Did something");
//       resolve(
//         "https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup_brand&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C&utm_content=brand_new&gclid=Cj0KCQjw0IGnBhDUARIsAMwFDLmxPjftchj5KYydb9ipjyknim5gMbDzuOssdCV0sBdlcxLc2xykQrcaAk7rEALw_wcB"
//       );
//     }, 200);
//   });
// }

// doSomething();

let value = 1;
// doSomething(() => {
//   value = 2;
// });
// console.log(value);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(10 * 1000)
//   .then(() => saySomething("10 seconds"))
//   .catch(failureCallback);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1);
