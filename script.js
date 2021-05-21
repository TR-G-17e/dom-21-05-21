// const users = [
//     {id: 1, name: 'User 1'},
//     {id: 2, name: 'User 2'},
//     {id: 3, name: 'User 3'},
//     {id: 4, name: 'User 4'},
//     {id: 5, name: 'User 5'},
// ]

// const posts = []

function User(id, name) {
    this.id = Date.now() + id * 10
    this.name = name
}

function Post(id, userId, text) {
    this.id = id
    this.userId = userId
    this.text = text
}

const getUsers = (num) => {
    const users = [];
    for (let i=1; i<=num; i++) {
        users.push( createUser(i) )
    }
    return users
}

const createUser = (idx) => {
    return new User(idx,`User ${idx}`)
}

const getPosts = (numPost) => {
    const posts = []
    users.forEach( (user, index) => {
        for (let i = 1; i <= numPost; i++) {
            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )
        }
    } )
    return posts
}

// const createPosts = (num) => {
//     const 
// }

const users = getUsers(5)
const posts = getPosts(10)

posts.sort((a,b) => a.id-b.id)

console.log( posts );
