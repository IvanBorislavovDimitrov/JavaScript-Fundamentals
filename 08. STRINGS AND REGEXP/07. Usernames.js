function usernames(emails) {
    let usernames = [];
    for (let email of emails) {
        let info = '';
        let emailInfo = email.split('@');
        let emailName = emailInfo[0];
        let domains = emailInfo[1].split('.');
        info += emailName + '.';
        for (let domain of domains) {
            info += domain[0];
        }
        usernames.push(info);
    }

    console.log(usernames.join(', '));
}