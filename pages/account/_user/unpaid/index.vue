<!-- Displays bids made by a given order -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">business_center</v-icon>
            <span>My placed bids</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >
            <!-- Sorting buttons -->
            <v-row class="mb-3 mx-5">
                <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">Rejected:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">3</span>
                    </div>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption ml-3">Pending:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">4</span>
                    </div>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption ml-3">Accepted:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">1</span>
                    </div>

                <!-- End of button for displaying the button for displaying snackbar for type field -->

                <v-spacer></v-spacer>

                <div>
                    <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">Practise code:</span> 
                    <span class="pink--text text-accent-2 font-weight-bold caption">
                        {{ this.$route.params.user}}
                    </span>
                </div>
 
            </v-row>
            
            <v-card flat hover class="mb-1 project" v-for="bid in bids" :key="bid.bid_code" 
                :class="random_border_class()" 
                
            >
                <v-row class="px-3">
                    <v-col cols="12" md="4">
                        <!-- <div class="caption grey--text font-italic font-weight-bold">Bid Placed For</div> -->
                        <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                            <nuxt-link :to=" `/orders/${bid.order_code}` " class="caption mt-2 font-weight-bold cyan--text text-accent-2">
                                <v-avatar class="mr-5 elevation-4 ml-8" size="45">
                                    <v-icon :color="random_icon_color()">business_center</v-icon>
                                </v-avatar>
                                <span>Order</span> {{ bid.order_code }}
                            </nuxt-link>
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Asking Amount</div>
                        <div class="caption mt-2 font-weight-bold teal--text text-lighten-2">
                            {{ bid.asking_amount}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Deposit Requested</div>
                        <div class="caption mt-2 font-weight-bold pink--text tex-lighten-2">
                            {{ bid.deposit}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="right">
                            <v-chip small class="mt-5 white--text right" :color="chip_color(bid.status)">
                                {{bid.status}}
                            </v-chip>
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <v-btn small text color="blue" dark class="mt-4 ml-n9" @click="acceptBid(bid)">
                            <span class="text-capitalize caption font-weight-bold" style="text-decoration: underline;">
                                {{ bid.status == "Pending ..."? "Authorize Deposit" : "Authorize Payment" }}
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
            
        </v-container>
    </div>
</template>

<script>
export default {
  layout: "loggedInLayout",
    data: () => ({
        // snackbar
        snackbar: false,
        // sort_date
        sort_date: null,
        // formData
        formData: {
            status: ""
        },
        // statuses
        statuses: [
            "Pending ...",
            "Accepted"
        ],

        // bids
        bids: [
            {
                order_code: "bt4Res4",
                bid_code: "Ofj8T4e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Pending ..."
            
            },
            {
                order_code: "bt4Qes9",
                bid_code: "nPj8T4e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Completed"
            },
            {
                order_code: "bR4Res9",
                bid_code: "nfj804e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Completed"
    
            },
            {
                order_code: "ct4Res9",
                bid_code: "nfK8T4e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Pending ..."
    
            },
      ]
    }),
    methods: {
        // random border colors
        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "blue-borders",
                //"purple-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
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

        // chip color
        chip_color(status) {
            if (status == "Pending ...") {return "error"}
            return "green"
        },

        toggle_type_snackbar() {
            this.snackbar_category = false
            this.snackbar_type = !this.snackbar_type
        },

        toggle_category_snackbar() {
            this.snackbar_type = false
            this.snackbar_category = !this.snackbar_category
        },

        //sort by date
        sort_by_date() {
            console.log(this.sort_date)
        },
        // sort by status
        sort_by_status() {
            this.snackbar = false
            // set the category from the form data
            const status = this.formData.status
            //this.snackbar_type === true ? false : false 
            let sorted_by_status = this.bids.filter((bid) => bid.status == status)
            //console.log(sorted_by_category)
            this.bids = sorted_by_status
        },
        // reload
        reload() {
            const bids = this.bids
            console.log(bids)
            //this.bids = bids
            this.bids = bids
        }
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
</style>