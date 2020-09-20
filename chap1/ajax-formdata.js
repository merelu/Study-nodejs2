async () => {
  try {
    const formData = new FormData();
    formData.append("name", "zerodho");
    formData.append("birth", 1994);
    const result = await axios.post(
      "https://www.zerocho.com/api/post/formdata",
      formData
    );
    console.log(result);
    console.log(result.data);
  } catch (err) {
    console.error(err);
  }
};
