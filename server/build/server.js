'use strict';
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
// // Constants
var PORT = 80;
var HOST = '0.0.0.0';
// The GraphQL schema
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"A simple type for getting started!\"\n    hello: String\n  }\n"], ["\n  type Query {\n    \"A simple type for getting started!\"\n    hello: String\n  }\n"])));
// A map of functions which return data for the schema.
var resolvers = {
    Query: {
        hello: function () { return 'world'; },
    },
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
server.listen(PORT, HOST).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
var templateObject_1;
