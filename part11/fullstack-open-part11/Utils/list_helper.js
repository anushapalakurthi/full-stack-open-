const Dummies = (blogs) => 1
const likesCount = (blogs) => {
  const total = blogs.reduce((total, currentValue) => {
    return total + currentValue.likes
  }, 0)
  return total
}
const favoriteBlog = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null
  }
  const max = blogs.reduce((prev, current) =>
    prev.likes > current.likes ? prev : current,
  )
  const favBlog = {
    title: max.title,
    author: max.author,
    likes: max.likes,
  }
  return favBlog
}
const blogMax = (blogs) => {
  const authors = blogs.map((blog) => blog.author)
  if (!authors || authors.length === 0) {
    return null
  }
  const countBlogsByAuthor = authors.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1)
    return acc
  }, {})
  const authorWithMostBlogsArray = Object.entries(
    countBlogsByAuthor,
  ).reduce((a, b) => (countBlogsByAuthor[a] > countBlogsByAuthor[b] ? a : b))

  const authorWithMostBlogs = {
    author: authorWithMostBlogsArray[0],
    blogs: authorWithMostBlogsArray[1],
  }

  return authorWithMostBlogs
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  // Get all of the blog authors
  const authors = blogs.map((blog) => blog.author)

  let uniqueAuthors = [...new Set(authors)]
  const likesByAuthor = uniqueAuthors.map((author) => {
    const blogsByAuthor = blogs.filter((blog) => blog.author === author)
    const countLikesPerAuthor = blogsByAuthor.reduce(
      (accumulator, currentValue) => accumulator + currentValue.likes,
      0,
    )
    const amountOfLikesByAuthor = {
      author: author,
      likes: countLikesPerAuthor,
    }
    return amountOfLikesByAuthor
  })
  return likesByAuthor.reduce((a, b) => (a.likes > b.likes ? a : b))
}
module.exports = { Dummies, likesCount, favoriteBlog, blogMax, mostLikes }
