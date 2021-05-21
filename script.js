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

const getPosts = () => {
    const posts = []
    users.forEach( (user) => {
        let numPosts = Math.floor(Math.random() * 25)
        for (let i = 1; i <= numPosts; i++) {
            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )
        }
    } )
    return posts
}

const renderUsers = () => {
    const lBlock = document.querySelector('#l')
    lBlock.innerHTML = ''
    users.forEach( user => {
        const card = document.createElement('div')
        card.id = `user_${user.id}`
        card.innerText = user.name
        card.addEventListener('click', onUserClickHandle)
        lBlock.appendChild(card)
    } )
}

const onUserClickHandle = event => {
    console.log( event.target )
    let userId = +event.target.id.split('_')[1]
    const filteredPosts = posts.filter( post => post.userId === userId )
    if (!filteredPosts.length) {
        return false
    }
    renderPosts( filteredPosts )
}

const renderPosts = ( fPosts ) => {
    const rBlock = document.querySelector('#r')
    rBlock.innerHTML = ''
    fPosts.forEach( post => {
        const postCard = document.createElement('div')
        postCard.innerText = post.text
        rBlock.appendChild(postCard)
    } )
}

const users = getUsers(5)
const posts = getPosts()

posts.sort((a,b) => a.id-b.id)

renderUsers();
