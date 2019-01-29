import { gql } from 'apollo-server-express'

const typeDefs = gql`
type Query{
  getEITs: [EIT],
  getOneEIT(id:String): [EIT]
}
type Mutation{
  addEIT(
    first_name: String,
    last_name: String,
    dob: String,
    country: String,
    gender: String,
    cohort: String
  ): [String],
  updateEIT(
    id: String,
    first_name: String,
    last_name: String,
    dob: String,
    country: String,
    gender: String,
    cohort: String
  ): [String],
  deleteEIT(
    id:String
  ): [String]
}
type EIT {
  _id: String,
  first_name: String,
  last_name: String,
  dob: String,
  country: String,
  gender: String,
  cohort: String
}
`
export default typeDefs
