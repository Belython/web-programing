supertokens.init({
  apiDomain: 'https://arcane-crag-35636.herokuapp.com',
  apiBasePath: '/api',
});

document
  .getElementById('login')
  .addEventListener('click', async function (event) {
    const responseForm = await fetch(
      'https://arcane-crag-35636.herokuapp.com/api/authorisationurl?thirdPartyId=github',
      {
        method: 'GET',
        headers: {
          rid: 'thirdparty',
        },
      },
    ).then((responseForm) => responseForm.json());

    let urlObj = new URL(responseForm.url);
    urlObj.searchParams.append(
      'redirect_uri',
      'https://arcane-crag-35636.herokuapp.com/auth/callback/github',
    );
    window.location.href = urlObj.toString();
  });
