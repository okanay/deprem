async function fetchPostData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return [null, result];
  } catch (error) {

    error = { message : "Hata meydana geldi!", systemMessage : error.message}
    return [error, null];
  }
}

export default fetchPostData;