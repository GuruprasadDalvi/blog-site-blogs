

describe('E2E Testing for blog microservice', () => {

  it('should display a list of blog posts', () => {
      cy.request('GET', 'http://localhost:3000/api/blogs/all')
          .then((response) => {
              expect(response.status).to.eq(200)
          })
  })

  it('should display a single blog post', () => {
      cy.request('GET', 'http://localhost:3000/api/blogs/blog/1')
          .then((response) => {
              expect(response.status).to.eq(200)
          })
  })

  it('should display a list of blog posts by user id', () => {
      cy.request('GET', 'http://localhost:3000/api/blogs/user/blogs/user')
          .then((response) => {
              expect(response.status).to.eq(200)
          })
  })

  it('should create a new blog post', () => {

      cy.request({ failOnStatusCode: false, method: 'POST', url: 'http://localhost:3000/api/blogs/create', body:{
          title: 'New Blog Post',
          content: 'This is a new blog post',
          userId: 1
      }})
          .then((response) => {
              expect(response.status).to.eq(401)
          })
  })


})