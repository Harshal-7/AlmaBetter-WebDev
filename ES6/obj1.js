const user = {
    name: 'John Doe',
    age: 25,
    dob: '08/02/1989',
};

for(let item in user)
{
    console.log(`${item}: ${user[item]}`);
}

for (const key in user) {

    if (user.hasOwnProperty(key)) {

        console.log(`${key}: ${user[key]}`);
    }
}