function formFiller(username, email, phoneNumber, text) {
    text.forEach(line => {
            line = line.replace(/<![a-zA-Z]+!>/g, username);
            line = line.replace(/<@[a-zA-Z]+@>/g, email);
            line = line.replace(/<\+[a-zA-Z]+\+>/g, phoneNumber);
            console.log(line);
        }
    );
}