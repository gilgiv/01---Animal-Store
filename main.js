function validateFields() {
    const first_name_box = document.getElementById("first_name_box");
    const last_name_box = document.getElementById("last_name_box");
    const message_box = document.getElementById("message_box");

    const firstName = first_name_box.value;
    const lastName = last_name_box.value;
    const message = message_box.value;

    first_name_box.style.backgroundColor = "";
    last_name_box.style.backgroundColor = "";
    message_box.style.backgroundColor = "";

    if (firstName === "") {
        alert("Please enter first name");
        first_name_box.focus();
        first_name_box.style.backgroundColor = "pink";
        event.preventDefault();
        return;
    }

    if (lastName === "") {
        alert("Please enter last name");
        last_name_box.focus();
        last_name_box.style.backgroundColor = "pink";
        event.preventDefault();
        return;
    }

    if (message === "") {
        alert("Please enter message");
        message_box.focus();
        message_box.style.backgroundColor = "pink";
        event.preventDefault();
        return;
    }
}