const url = 'https://jsonplaceholder.typicode.com'
const btn = document.getElementById('users-btn')



btn.addEventListener('click', () => {
  ajax({
    method: 'get',
    url: `${url}/users`,
    load: loadUsers
    // load: data => {
    //   console.log(data)
    //   const user = data[4]

    //   ajax({
    //     method: 'get',
    //     url: `${url}/posts?userId=${user.id}`,
    //     load: posts => {
    //       console.log('posts', posts)

    //       posts.forEach(post => {
    //         ajax({
    //           method: 'get',
    //           url: `${url}/comments?postId=${post.id}`,
    //           load: comments => {
    //             console.log('posts', comments)
    //           }
    //         })
    //       })
    //     }
    //   })
    // }
  })
})

const loadUsers = data => {
  console.log(data)
  const user = data[4]

  ajax({
    method: 'get',
    url: `${url}/posts?userId=${user.id}`,
    load: loadPosts
  })
}

const loadPosts = posts => {
  console.log('posts', posts)

  posts.forEach(post => {
    ajax({
      method: 'get',
      url: `${url}/comments?postId=${post.id}`,
      load: loadComments
    })
  })
}

const loadComments = comments => {
  console.log('posts', comments)
}

const ajax = (config) => {
  const xhr = new XMLHttpRequest()
  xhr.open(config.method, config.url)
  
  xhr.addEventListener('load', () => {
    if(xhr.status === 200) {
      config.load(JSON.parse(xhr.response))
    
  }})
  xhr.send()
  return xhr
}