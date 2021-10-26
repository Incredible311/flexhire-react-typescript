import gql from 'graphql-tag';

const UserQuery = gql`
query {
        freelancers {
            id
            first_name
            last_name
            status
        }
}`;


export {
    UserQuery
};
