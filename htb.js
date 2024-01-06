const get_msg = () => {
  fetch("http://127.0.0.1/message/3")
    .then((response) => response.json())
    .then((data) => {
      msg = data.message;
      console.log(msg);
    });
};

get_msg();
