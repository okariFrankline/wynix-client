<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">business_center</v-icon>
            <span>Assigned Orders</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >

            <md-empty-state
                md-rounded
                v-if="orders.length == 0"
                style="margin-top: -2.5em;"
                class="grey--text"
                md-icon="money_off"
                md-label="No Transactions to display!"
                >
            </md-empty-state>

            <div v-if="orders.length !== 0">
                <!-- Sorting buttons -->
                <v-row class="mb-3 mx-5">
                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">Complete:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">3</span>
                    </div>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption ml-3">In Progress:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">4</span>
                    </div>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption ml-3">Cancelled:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">1</span>
                    </div>

                    <v-spacer></v-spacer>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">user code:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption">JkI7e3</span>
                    </div>
    
                </v-row>

                <v-card flat hover class="mb-1 project" v-for="order in orders" :key="order.id" :class="transaction_class()">
                    <v-row class="px-3">
                        <v-col cols="12" md="4">
                            <!-- <div class="caption grey--text font-italic font-weight-bold">Order Category</div> -->
                            <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                <nuxt-link :to=" `/orders/${order.order_code}` " class="teal--text text-accent-2">
                                    <v-avatar class="mr-5 elevation-4 ml-5" size="45">
                                        <v-icon :color="random_icon_color()">business_center</v-icon>
                                    </v-avatar>
                                    {{ order.order_category }}
                                </nuxt-link>
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Assigned on</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ order.assigned_on }}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Due Date</div>
                            <div class="caption mt-2 font-weight-bold teal--text tex-lighten-2">
                                {{ order.due_date }}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Order Owner</div>
                            <div class="caption mt-2 font-weight-bold pink--text text-lighten-2">
                                {{ order.owner }}
                            </div>
                        </v-col>

                        
                        <v-col cols="6" sm="4" md="2">
                            <div class="right">
                                <v-chip small class="my-2 white--text" :color="chip_color(order.status)">
                                    {{order.status}}
                                </v-chip>
                                <v-tooltip top color="success">
                                <template v-slot:activator=" {on, attrs} ">
                                    <v-btn x-small fab right color="success" v-if="order.status == 'In Progress'" class="ml-3" v-bind="attrs" v-on="on">
                                        <v-icon small>done_all</v-icon>
                                    </v-btn>
                                </template>
                                <span>Mark Complete</span>
                            </v-tooltip>
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-card>
            </div>
            
        </v-container>
    </div>
</template>

<script>
export default {
  layout: "loggedInLayout",
    data: () => ({
        formData: {
            sort_type: "",
            sort_date: ""
        },
        items: [
            "Order Publishing",
            "Token Payment",
            "Order Payment"
        ],
        snackbar_type: false,
        snackbar_date: false,
        menu: false,
        // orders
        orders: [
            {   
                id: 1,
                order_code: "Nj45E3",
                order_category: "Mobile App Development",
                assigned_on: "2nd May 20120",
                status: "Complete",
                due_date: "23-02-2020",
                owner: "Frankline Okari"
            },
            {   
                id: 2,
                order_code: "Nj45E3",
                order_category: "Tatoo Drawing",
                assigned_on: "2nd May 20120",
                status: "In Progress",
                due_date: "23-02-2020",
                owner: "Peter Kimani"
            },
            {   
                id: 3,
                order_code: "Nj45E3",
                order_category: "Financial Consultancy",
                assigned_on: "2nd May 20120",
                status: "Cancelled",
                due_date: "23-02-2020",
                owner: "Faith Chadianya"
            },
            {   
                id: 4,
                order_code: "Nj45E3",
                order_category: "Event Planning",
                assigned_on: "2nd May 20120",
                status: "In Progress",
                due_date: "23-02-2020",
                owner: "Donna Njeri"
            }
        ]
    }),
    methods: {
        chip_color(status) {
            if (status == "Complete") {return "green"}
            if (status == "In Progress") {return "#3cd1c2"}
            if (status == "Cancelled") { return "error"}
            return "#f83e70"
        },

        random_icon_color() {
            const colors = [
                "green",
                "red",
                "blue",
                //"purple-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },

        transaction_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "blue-borders",
                //"purple-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },
        sort_by_date() {
            console.log(this.formData.sort_date)
        },
        sort_by_type() {
            console.log(this.formData.sort_type)
        }
    },
}
</script>

<style>
    .project.tomato-borders {
        border-left: 4px solid tomato;
        border-right: 4px solid tomato;
        border-bottom: 1px solid tomato;
        
    }
    .project.orange-borders {
        border-left: 4px solid orange;
        border-right: 4px solid orange;
        border-bottom: 1px solid orange;
    }
    .project.blue-borders {
        border-left: 4px solid #3cd1c2;
        border-right: 4px solid #3cd1c2;
        border-bottom: 1px solid #3cd1c2;
    }
    /* .project.purple-borders {
        border-left: 4px solid #9575CD;
        border-right: 4px solid #9575CD;
        border-bottom: 1px solid #9575CD;
    } */
    .code {
        color: maroon;
        font-size: 1rem;
        font-weight: bolder;
    }
    .answer {
        color: #4A5806;
        font-size: 1rem;
        font-weight: bolder;
    }
</style>