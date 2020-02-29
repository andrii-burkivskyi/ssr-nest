export default {
    create: `
        mutation CreateProject($input: CreateProjectInput!) {
            data: createProject(input: $input){
                id
                #keys
                name
                color 
                url
                #keys
            }
        }
    `,
    update: `
        mutation UpdateProject($input: UpdateProjectInput!) {
            data: updateProject(input: $input){
                id
                #keys
                name
                color 
                url
                #keys
            }
        }
    `,
    delete: `
        mutation DeleteProject($input: DeleteProjectInput!) {
            data: deleteProject(input: $input)
        }
    `,
    get: `
        query GetProject($id: Int!) {
            data: project(id: $id){
                id
                #keys
                name
                color 
                url
                #keys
            }
        }
    `,
    getList: `
        query GetProjectsList($input: ProjectPaginationInput!){
            data: projects(input: $input){
                items {
                    id
                    #keys
                    name
                    color
                    url
                    #keys
                }
                page
                take
                totalItems
            }
        }
    `
};