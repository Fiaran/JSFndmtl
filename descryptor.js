const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};
Object.defineProperty(user, 'birthday', {writable: false});


// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});
// user.name = 'asdsad';
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//writable
// enumerable
// configurable