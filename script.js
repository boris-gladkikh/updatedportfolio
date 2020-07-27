const form = document.getElementById('form');
let email = document.getElementById('emailInput');
let name = document.getElementById('nameInput');
let body = document.getElementById('bodyInput');
let formSubmitMsg = document.getElementById('formSubmitMsg');
const originSite = 'portfolio-site';
let serverUrl = "https://gladkill-backend.herokuapp.com/emails/";


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let formObj = {
    name: name.value,
    email: email.value,
    body: body.value,
    originSite
  }
  console.log(formObj);
  try {
    let postedEmail = await axios.post(serverUrl, formObj);
    console.log("email posted!", postedEmail);
    name.value = '';
    email.value = '';
    body.value = '';
    formSubmitMsg.innerText = 'Successfully Submitted!';
  }
  catch (err) {
    console.error(err)
    formSubmitMsg.innerText = err.message;
  }

})