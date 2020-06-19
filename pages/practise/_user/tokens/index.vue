<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">credit_card</v-icon>
            <span>Token history</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >

            <md-empty-state
                md-rounded
                v-if="tokens.length == 0"
                style="margin-top: -2.5em;"
                class="grey--text"
                md-icon="money_off"
                md-label="No Transactions to display!"
                >
            </md-empty-state>

            <div v-if="tokens.length !== 0">
                <!-- Sorting buttons -->
                <v-row class="mb-3 mx-5">
                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption">Bid Tokens:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">20</span>
                    </div>

                    <div>
                        <span class="teal--text text-accent-5 font-weight-bold mr-2 caption ml-3">Publish Tokens:</span> 
                        <span class="pink--text text-accent-2 font-weight-bold caption ml-n1">20</span>
                    </div>
            
                    <v-spacer></v-spacer>
                    <!-- Button for displaying the button for displaying snackbar for type field -->
                    <div>
                        
                        <v-btn text color="teal accent-5"  @click="snackbar_type = !snackbar_type"> 
                            <v-icon small left>restore</v-icon>
                            <span class="text-lowercase caption font-weight-bold">Renew Tokens</span>
                        </v-btn>
                        <v-snackbar v-model="snackbar_type" top color="white">
                            <v-select
                                :items="items"
                                prepend-icon="filter_alt"
                                placeholder="Choose Transaction Type"
                                v-model="formData.sort_type"
                                @input="sort_by_type"
                            ></v-select>
                        </v-snackbar> 
                    </div>
                    <!-- End of button for displaying the button for displaying snackbar for type field -->
    
                </v-row>

                <v-card flat hover ripple class="mb-1 project" v-for="token in tokens" :key="token.id" :class="random_border_class()">
                    <v-row class="px-3">
                        <v-col cols="12" md="6">
                            <div class="caption grey--text font-italic">Token Type</div>
                            <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                                {{ token.token_type }}
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Used for</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                <nuxt-link :to=" `/orders/${token.order_code}` ">
                                    Order {{ token.order_code }}
                                </nuxt-link>
                            </div>
                        </v-col>

                        <v-col cols="6" sm="4" md="2">
                            <div class="caption grey--text font-italic">Usage date</div>
                            <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                {{ token.inserted_at}}
                            </div>
                        </v-col>

                        
                        <v-col cols="6" sm="4" md="2">
                            <div class="right">
                                <v-chip small class="my-2 white--text" :color="chip_color()">
                                    Redeemed
                                </v-chip>
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
        tokens: [
            {   
                id: 1,
                token_type: "Bid Token",
                order_code: "b7uIE7",
                inserted_at: "2nd May 20120",
            },
            {   
                id: 2,
                token_type: "Bid Token",
                order_code: "b7uIE7",
                inserted_at: "2nd May 20120",
            },
            {   
                id: 3,
                token_type: "Publish Token",
                order_code: "b7uIE7",
                inserted_at: "2nd May 20120",
            },
            {   
                id: 4,
                token_type: "Bid Token",
                order_code: "b7uIE7",
                inserted_at: "2nd May 20120",
            }
        ]
    }),
    methods: {
        chip_color(status) {
            const colors = [
                "green",
                "pink",
                "blue"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },

        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "blue-borders",
                "purple-borders"
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
    .project.purple-borders {
        border-left: 4px solid #9575CD;
        border-right: 4px solid #9575CD;
        border-bottom: 1px solid #9575CD;
    }
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