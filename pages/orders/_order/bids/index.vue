<!-- Displays bids for a given order -->
<!-- Displays a list of all the available order, quotations, proposals -->
<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">business_center</v-icon>
            <span>Current Bids for Order {{this.$route.params.order}}</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >
            <!-- Sorting buttons -->
            <v-row class="mb-3 mx-5">
                

                <div>
                    <v-btn text color="pink accent-2"  @click="() => this.$router.back()"> 
                        <v-icon small left class="font-weight-bold">undo</v-icon>
                        <span class="text-lowercase body-2 font-weight-bold font-italic">back to order</span>
                    </v-btn>
                </div>
                <!-- End of button for displaying the button for displaying snackbar for type field -->

                <v-spacer></v-spacer>

                <div>
                    <span class="teal--text text-accent-5 font-weight-bold mr-2 subtitle font-italic">Payable Amount:</span> 
                    <span class="pink--text text-accent-2 font-weight-bold body-2 font-italic">
                        KES 50000
                    </span>
                </div>
 
            </v-row>

            <v-card flat hover class="mb-1 project" v-for="bid in bids" :key="bid.bid_code" 
                :class="random_border_class()" 
                
            >
                <v-row class="px-3">
                    <v-col cols="12" md="4">
                        <div class="caption grey--text font-italic">Bidder Name</div>
                        <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                            <nuxt-link :to=" `/practise/${bid.owner_id}` " class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                {{ bid.bid_owner }}
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
                        <v-btn x-small class="primary ligten-4 my-3" @click="acceptBid(bid)">
                            <v-icon small left>done_all</v-icon>
                            <span class="text-capitalize">Accept</span>
                        </v-btn>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <v-btn x-small class="error ligten-4 my-3" @click="rejectBid(bid)">
                            <v-icon small left>close</v-icon>
                            <span class="text-capitalize">Reject</span>
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

        // bids
        bids: [
            {
                bid_code: "bt4Res9",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                bid_owner: "Frankline Okari",
                owner_id: "kj7He4"
            },
            {
                bid_code: "bt4Res9",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                bid_owner: "Donna Njeri",
                owner_id: "kj7He4"
            },
            {
                bid_code: "bt4Res9",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                bid_owner: "Moses Omwansa",
                owner_id: "kj7He4"
            },
            {
                bid_code: "bt4Res9",
                asking_amount: "KES 50000",
                deposit: "KES 30000",
                bid_owner: "Samwel Kiprop",
                owner_id: "kj7He4"
            },
      ]
    }),
    methods: {

        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "lime-borders",
                "pink-borders"
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

        // reject bid
        rejectBid(bid) {
            alert("Bid rejected")
        },

        // accept bid
        acceptBid(bid) {
            alert("Bid Accepted")
        },
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