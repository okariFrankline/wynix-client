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
                <!-- Button for reloading all -->
                <div>
                    <v-btn color="blue" text @click="reload">
                        <v-icon left small>restore</v-icon>
                        <span class="text-lowercase caption font-weight-bold">Reload all</span>
                    </v-btn>
                </div>
                <!-- End of button for reloading all -->
                <!-- Button for displaying the sort date -->
                <div>
                    <v-menu
                        :close-on-content-click="true"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text color="pink accent-2" v-on="on" v-bind="attrs"> 
                                <v-icon left class="font-weight-bold" small>sort</v-icon>
                                <span class="text-capitalize caption font-weight-bold">filter by date</span>
                            </v-btn>
                        </template>
                        <v-date-picker no-title v-model="sort_date" @input="sort_by_date" ></v-date-picker>
                    </v-menu>
                </div>
                <!-- End of button for displaying the sort date -->

                <!-- Button for displaying the sort date -->
                    <div>
                        <v-btn text color="teal accent-5"  @click="snackbar = !snackbar"> 
                            <v-icon small left>sort</v-icon>
                            <span class="text-lowercase caption font-weight-bold">Filter By category</span>
                        </v-btn>
                        <v-snackbar v-model="snackbar" top color="#f7f8fb" timeout=15000>
                            <v-select
                                dense
                                :items="statuses"
                                prepend-icon="filter_alt"
                                placeholder="Choose Bid Status"
                                v-model="formData.status"
                            ></v-select>
                            <v-btn depressed small class="teal accent-5" dark @click="sort_by_status">Sort</v-btn>
                        </v-snackbar>
                    </div>
                    <!-- End of button for displaying the sort date -->

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
                        <div class="caption grey--text font-italic">Bid Placed For</div>
                        <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                            <nuxt-link :to=" `/orders/${bid.order_code}` " class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                <span>Order</span> {{ bid.order_code }}
                            </nuxt-link>
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Asking Amount</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ bid.asking_amount}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Deposit Requested</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ bid.deposit}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Date Placed</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ bid.inserted_at}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="right">
                            <v-chip small class="my-2 white--text right" :color="chip_color(bid.status)">
                                {{bid.status}}
                            </v-chip>
                            <v-tooltip top color="error">
                                <template v-slot:activator=" {on, attrs} ">
                                    <v-btn x-small icon right color="error" v-if="bid.status !== 'Pending'" class="ml-3" v-bind="attrs" v-on="on">
                                        <v-icon small right>close</v-icon>
                                    </v-btn>
                                </template>
                                <span>Remove</span>
                            </v-tooltip>
                        </div>
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
            "Pending",
            "Rejected",
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
                status: "Pending"
            
            },
            {
                order_code: "bt4Qes9",
                bid_code: "nPj8T4e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Rejected"
            },
            {
                order_code: "bR4Res9",
                bid_code: "nfj804e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Accepted"
    
            },
            {
                order_code: "ct4Res9",
                bid_code: "nfK8T4e",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                inserted_at: "23-02-2020",
                status: "Pending"
    
            },
      ]
    }),
    methods: {
        // random border colors
        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "lime-borders",
                "pink-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },

        // chip color
        chip_color(status) {
            if (status == "Pending") {return "#00B0FF"}
            if ( status == "Rejected") {return "error"}
            return "success"
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
        border-left: 4px solid #64FFDA;
        border-right: 4px solid #64FFDA;
        border-bottom: 1px solid #64FFDA;
        
    }
    .project.orange-borders {
        border-left: 4px solid #FFFF00;
        border-right: 4px solid #FFFF00;
        border-bottom: 1px solid #FFFF00;
    }
    .project.lime-borders {
        border-left: 4px solid #76FF03;
        border-right: 4px solid #76FF03;
        border-bottom: 1px solid #76FF03;
    }
    .project.pink-borders {
        border-left: 4px solid #FF80AB;
        border-right: 4px solid #FF80AB;
        border-bottom: 1px solid #FF80AB;
    }
</style>