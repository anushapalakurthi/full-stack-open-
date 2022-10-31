import { gql } from 'apollo-boost';
export const AUTHORIZE = gql
`
  mutation Authorize($input: AuthorizeInput) {
    authorize(credentials: $input) {
      accessToken
    }
  }
`;
export const CREATE_REVIEW = gql
`
  mutation CreateReview($input: CreateReviewInput) {
    createReview(review: $input) {
      repositoryId
    }
  }
`;
export const CREATE_USER = gql
`
  mutation CreateUser($input: CreateUserInput) {
    createUser(user: $input) {
      id
    }
  }
`;
export const DELETE_REVIEW = gql
`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;