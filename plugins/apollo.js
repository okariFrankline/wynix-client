import Vue from "vue"
import { ApolloClient } from 'apollo-client'
import { HttpLInk } from 'apollo-link-http'
import { VueApollo } from 'vue-apollo'
import { InMemoryCache } from "apollo-boost"

// define the backend httpp link
const httpLInk = new HttpLInk({
    uri: "http:localhost:3000/graphql"
})

// set the apollo clinet
const apolloClient =  new ApolloClient({
    link: "localhost:30oo/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true
})

// create the apolloprovider
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// install the plugin
Vue.use(VueApollo)
