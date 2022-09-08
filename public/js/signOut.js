supertokens.init({
  apiDomain: "https://arcane-crag-35636.herokuapp.com",
  apiBasePath: "/api"
});

document.getElementById("exit").addEventListener('click', async function(event) {
  async function logout() {
    await supertokens.signOut();
    window.location.href = "/";
  }
  if (await supertokens.doesSessionExist()) {
    logout();
    supertokens.attemptRefreshingSession();
  }
})
