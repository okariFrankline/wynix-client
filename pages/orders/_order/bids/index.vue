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
        <v-container class="my-5 mt-n4" >
            <!-- Sorting buttons -->
            <v-row class="mb-3 mx-5">
                

                <div>
                    <v-btn text color="pink accent-2"  @click="() => this.$router.back()"> 
                        <v-icon small left class="font-weight-bold">undo</v-icon>
                        <span class="text-lowercase caption font-weight-bold">back to order</span>
                    </v-btn>
                </div>
                <!-- End of button for displaying the button for displaying snackbar for type field -->

                <v-spacer></v-spacer>

                <div>
                    <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">Payable Amount:</span> 
                    <span class="pink--text text-accent-2 font-weight-bold caption">
                        KES 50000
                    </span>
                </div>
 
            </v-row>

            <v-card flat hover class="mb-1 project" v-for="bid in bids" :key="bid.bid_code" 
                :class="random_border_class()" 
                
            >
                <v-row class="px-3">
                    <v-col cols="12" md="4">
                        <!-- <div class="caption grey--text font-italic ml-10">Bidder</div> -->
                        <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                            <nuxt-link :to=" `/practise/${bid.owner_id}` " class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                <v-avatar class="mr-5 elevation-4 ml-10" size="47">
                                    <img src="/images/person.jpg" class="grey lighten-2">
                                </v-avatar>
                                {{ bid.bid_owner }}
                            </nuxt-link>
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Asking Amount</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ bid.asking_amount}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-weight-bold" style="text-decoration: underline;">Deposit Requested</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ bid.deposit}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <v-btn x-small class="primary ligten-4 my-3" @click="acceptBid(bid)">
                            <span class="text-capitalize">Accept</span>
                        </v-btn>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <v-btn x-small class="error ligten-4 my-3" @click="rejectBid(bid)">
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
                "blue-borders",
                //"purple-borders"
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
    /* .project.pink-borders {
        border-left: 4px solid #FF80AB;
        border-right: 4px solid #FF80AB;
        border-bottom: 1px solid #FF80AB;
    } */
</style>