"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: "\n        mutation CreateProject($input: CreateProjectInput!) {\n            data: createProject(input: $input){\n                id\n                #keys\n                name\n                color \n                url\n                #keys\n            }\n        }\n    ",
    update: "\n        mutation UpdateProject($input: UpdateProjectInput!) {\n            data: updateProject(input: $input){\n                id\n                #keys\n                name\n                color \n                url\n                #keys\n            }\n        }\n    ",
    delete: "\n        mutation DeleteProject($input: DeleteProjectInput!) {\n            data: deleteProject(input: $input)\n        }\n    ",
    get: "\n        query GetProject($id: Int!) {\n            data: project(id: $id){\n                id\n                #keys\n                name\n                color \n                url\n                #keys\n            }\n        }\n    ",
    getList: "\n        query GetProjectsList($input: ProjectPaginationInput!){\n            data: projects(input: $input){\n                items {\n                    id\n                    #keys\n                    name\n                    color\n                    url\n                    #keys\n                }\n                page\n                take\n                totalItems\n            }\n        }\n    "
};
//# sourceMappingURL=index.js.map