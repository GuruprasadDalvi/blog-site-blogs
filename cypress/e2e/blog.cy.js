// openapi: 3.0.3
// info:
//   title: sys-blog
//   version: "1.0.0"
//   description: System API to interact with blog data in database
// servers:
//   - url: http://localhost:3000/v1/api/blog/blogs
// tags:
//   - name: blog
//     description: Operations about blog
//     externalDocs:
//       description: Find out more
//       url: http://swagger.io/v1/api/blog/blogs

// paths:
//   /ping:
//     get:
//       tags:
//         - blog
//       summary: ping endpoint
//       description: ping with status and time stamp
//       operationId: getPing
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/PingResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:ping
//             - write:ping
//   /all:
//     get:
//       tags:
//         - blog
//       summary: get all blogs from db
//       description: get all blogs from database
//       operationId: getAllBlogs
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/AllBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:all
//             - write:all
//   /blogs/{id}:
//     get:
//       tags:
//         - blog
//       summary: get a blog by id
//       description: get a blog by id from database
//       operationId: getBlogById
//       parameters:
//         - name: id
//           in: path
//           description: ID of blog to return
//           required: true
//           schema:
//             type: string
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/Blog'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:all
//             - write:all
//   /user/blogs/{userId}:
//     get:
//       tags:
//         - blog
//       summary: get all blogs by user id
//       description: get all blogs by user id from database
//       operationId: getBlogsByUserId
//       parameters:
//         - name: userId
//           in: path
//           description: ID of user to return blogs
//           required: true
//           schema:
//             type: string
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/AllBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:all
//             - write:all
//   /create:
//     post:
//       tags:
//         - blog
//       summary: create a new blog
//       description: create a new blog in database
//       operationId: createBlog
//       requestBody:
//         content:
//           application/json:
//             schema:
//               $ref: '#/components/schemas/CreateBlogRequest'
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/CreateBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:create
//             - write:create
//   /update/{id}:
//     put:
//       tags:
//         - blog
//       summary: update a blog
//       description: update a blog in database
//       operationId: updateBlog
//       requestBody:
//         content:
//           application/json:
//             schema:
//               $ref: '#/components/schemas/UpdateBlogRequest'
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/UpdateBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:update
//             - write:update
//   /delete/{id}:
//     delete:
//       tags:
//         - blog
//       summary: delete a blog
//       description: delete a blog from database
//       operationId: deleteBlog
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/DeleteBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:delete
//             - write:delete

//   /publish/{id}:
//     post:
//       tags:
//         - blog
//       summary: publish a blog
//       description: publish a blog in database
//       operationId: publishBlog
//       requestBody:
//         content:
//           application/json:
//             schema:
//               $ref: '#/components/schemas/PublishBlogRequest'
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/PublishBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:publish
//             - write:publish

//   /unpublish/{id}:
//     post:
//       tags:
//         - blog
//       summary: unpublish a blog
//       description: unpublish a blog in database
//       operationId: unpublishBlog
//       requestBody:
//         content:
//           application/json:
//             schema:
//               $ref: '#/components/schemas/UnpublishBlogRequest'
//       responses:
//         '200':
//           description: Successful operation
//           content:
//             application/json:
//               schema:
//                 $ref: '#/components/schemas/UnpublishBlogResponse'
//         '400':
//           description: Invalid ID supplied
//         '404':
//           description: Pet not found
//         '422':
//           description: Validation exception
//       security:
//         - auth:
//             - read:unpublish
//             - write:unpublish

// components:
//   schemas:
//     PingResponse:
//       type: object
//       properties:
//         status:
//           type: string
//         time:
//           type: string
//     AllBlogResponse:
//       type: object
//       properties:
//         blogs:
//           type: array
//           items:
//             $ref: '#/components/schemas/Blog'
//     Blog:
//       type: object
//       properties:
//         id:
//           type: string
//         title:
//           type: string
//         content:
//           type: string
//         idPublished:
//           type: boolean
//         createdAt:
//           type: string
//         updatedAt:
//           type: string
//         userId:
//           type: string
//     CreateBlogRequest:
//       type: object
//       properties:
//         title:
//           type: string
//         content:
//           type: string
//         userId:
//           type: string
//     CreateBlogResponse:
//       type: object
//       properties:
//         id:
//           type: string
//     UpdateBlogRequest:
//       type: object
//       properties:
//         id:
//           type: string
//         title:
//           type: string
//         content:
//           type: string
//     UpdateBlogResponse:
//       type: object
//       properties:
//         id:
//           type: string
//     DeleteBlogResponse:
//       type: object
//       properties:
//         id:
//           type: string
//     PublishBlogRequest:
//       type: object
//       properties:
//         id:
//           type: string
//     PublishBlogResponse:
//       type: object
//       properties:
//         id:
//           type: string
//     UnpublishBlogRequest:
//       type: object
//       properties:
//         id:
//           type: string
//     UnpublishBlogResponse:
//       type: object
//       properties:
//         id:
//           type: string
// security:
//   - auth:
//       - read:ping
//       - write:ping
//       - read:all
//       - write:all
//       - read:create
//       - write:create
//       - read:update
//       - write:update
//       - read:delete
//       - write:delete
//       - read:publish
//       - write:publish
//       - read:unpublish
//       - write:unpublish















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