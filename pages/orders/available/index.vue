<!-- Displays a list of all the available order, quotations, proposals -->
<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">business_center</v-icon>
            <span>Currently Available Orders</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >

            <md-empty-state
                md-rounded
                v-if="projects.length == 0"
                style="margin-top: -1em;"
                class="grey--text"
                md-icon="work_off"
                md-label="No orders available at the moment!"
                >
            </md-empty-state>

            <div v-if="projects.length !== 0">
                <!-- Sorting buttons -->
                <v-row class="mb-3 mx-5">
                    <!-- Button for displaying the sort date -->
                    <div>
                        <v-btn text color="pink accent-2"  @click="toggle_category_snackbar"> 
                            <v-icon small left>sort</v-icon>
                            <span class="text-lowercase caption font-weight-bold">Filter By category</span>
                        </v-btn>
                        <v-snackbar v-model="snackbar_category" top color="#f7f8fb">
                            <v-select
                                dense
                                :items="categories"
                                prepend-icon="filter_alt"
                                placeholder="Choose Order Category"
                                v-model="formData.sort_category"
                            ></v-select>
                            <v-btn depressed small class="pink accent-2" dark @click="sort_by_category">Sort</v-btn>
                        </v-snackbar>
                    </div>
                    <!-- End of button for displaying the sort date -->

                    <!-- Button for displaying the button for displaying snackbar for type field -->
                    <div>
                        
                        <v-btn text color="teal accent-5"  @click="toggle_type_snackbar"> 
                            <v-icon small left>sort</v-icon>
                            <span class="text-lowercase caption font-weight-bold">Filter By Type</span>
                        </v-btn>
                        <v-snackbar v-model="snackbar_type" top color="#f7f8fb">
                            <v-select
                                dense
                                :items="items"
                                prepend-icon="filter_alt"
                                placeholder="Choose Order Type"
                                v-model="formData.sort_type"
                            ></v-select>
                            <v-btn depressed small class="teal accent-5" dark @click="sort_by_type">Sort</v-btn>
                        </v-snackbar> 
                    </div>
                    <!-- End of button for displaying the button for displaying snackbar for type field -->

                    <v-spacer></v-spacer>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">user code:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption">JkI7e3</span>
                    </div>
    
                </v-row>

                <v-card flat hover ripple class="mb-1 project" v-for="project in projects" :key="project.id" 
                    :class="random_border_class()" 
                    nuxt 
                    :to="`${project.id}`"
                >
                    <v-row class="px-3">
                        <v-col cols="12" md="4">
                            <div class="caption grey--text font-italic">Order Category</div>
                            <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                {{ project.order_category }}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Order Type</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ project.order_type}}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Payable Amount</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ project.payable_amount}}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Bid before</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ project.transaction_date }}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Order Length</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ project.order_length }}
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
            sort_category: ""
        },
        items: [
            "Long Term Contract",
            "Short Term Contract",
            "Medium Term Contract"
        ],
        categories: [
            "Mobile App Development",
            "Tatoo Drawing",
            "Financial Consultancy"
        ],
        snackbar_type: false,
        snackbar_category: false,
        menu: false,
        orders: [],
        // orders
        projects: [
            {   
                id: 1,
                order_category: "Mobile App Development",
                order_length: "~ 2 days",
                transaction_date: "2nd May 20120",
                status: "complete",
                payable_amount: "KES 2000",
                order_type: "Long Term Contract"
            },
            {   
                id: 2,
                order_category: "Tatoo Drawing",
                order_length: "~ 1 day",
                transaction_date: "2nd May 20120",
                status: "complete",
                payable_amount: "KES 2000",
                order_type: "Short Term Contract"
            },
            {   
                id: 3,
                order_category: "Financial Consultancy",
                order_length: "~1 week",
                transaction_date: "2nd May 20120",
                status: "cancelled",
                payable_amount: "KES 2000",
                order_type: "Long Term Contract"
            },
            {   
                id: 4,
                order_category: "Event Planning",
                order_length: "~3 weeks",
                transaction_date: "2nd May 20120",
                status: "ongoing",
                payable_amount: "KES 2000",
                order_type: "Short Term Contract"
            }
        ]
    }),
    methods: {

        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "blue-borders",
                "purple-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },

        toggle_type_snackbar() {
            this.snackbar_category = false
            this.snackbar_type = !this.snackbar_type
        },

        toggle_category_snackbar() {
            this.snackbar_type = false
            this.snackbar_category = !this.snackbar_category
        },

        sort_by_type() {
            // set the snackbar_category to false
            this.snackbar_type = false
            // set the category from the form data
            const type = this.formData.sort_type
            //this.snackbar_type === true ? false : false 
            let sorted_by_type = this.projects.filter((project) => project.order_type == type)
            //console.log(sorted_by_category)
            this.projects = sorted_by_type
        },
        sort_by_category() {
             // set the snackbar_category to false
            this.snackbar_category = false
            // set the category from the form data
            const category = this.formData.sort_category
            //this.snackbar_type === true ? false : false 
            let sorted_by_category = this.projects.filter((project) => project.order_category == category)
            //console.log(sorted_by_category)
            this.projects = sorted_by_category
        },
    },
}
</script>

<style scoped>
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
    .project.purple-borders {
        border-left: 4px solid #9575CD;
        border-right: 4px solid #9575CD;
        border-bottom: 1px solid #9575CD;
    }
    .project:hover {
        text-decoration: none;
    }
</style>