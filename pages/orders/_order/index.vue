<!-- Displays a list of all the available order, quotations, proposals -->
<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        <!-- content of the dashboard -->
        <v-container >
            <v-row>
                <!-- Column for the details -->
                <v-col cols="12" md="5" class="mt-n2">
                      
                    <v-card flat class="project" color="#f7f8fb" hover>
                        <v-card-text class="text-left ml-5 pl-5">
                            <v-cols cols="12" md="6">
                                <div>
                                    <div style="margin-bottom: .3em;">
                                        <v-icon left small class="font-weight-bold">subject</v-icon>
                                        <span class="body-2 font-weight-bold title caption">Order Overview </span>
                                    </div>
                                    <!-- Full Name -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text caption">Order Code: </span> 
                                        <span class="caption answer"> {{overview.orderCode}} </span>
                                    </div>

                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text caption">Order Type: </span> 
                                        <span class="caption answer"> Long Term Contract </span>
                                    </div>

                                    <!-- Accepting Bids -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text caption">Order Category: </span> 
                                        <span class="caption answer"> Mobile App Development </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Order Status: </span> 
                                        <span class="answer"> Unpublished </span>
                                    </div>

                                    <OrderServices
                                        style="margin-left: -21em;"
                                        @save-service-data="updateServiceDetails"
                                    />
                                </div>

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>
                                
                                <div>
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold">history</v-icon>
                                        <span class="body-2 font-weight-bold title caption">Order Details </span>
                                    </div>
                                    
                                     <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Bidding/Submission Deadline: </span> 
                                        <span class="answer"> 22nd October 2020 </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Order Length: </span> 
                                        <span class="answer"> ~ 3 Months </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Contractors Needed: </span> 
                                        <span class="answer"> 1  </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Proposal Required: </span> 
                                        <span class="answer"> Yes </span>
                                    </div>

                                    <OrderDetails
                                        style="margin-left: -21em;"
                                        @save-details-data="updateDetails"
                                    />
                                </div>

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>

                                <!-- Payment information -->
                                <div>
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold">credit_card</v-icon>
                                        <span class="body-2 font-weight-bold title caption">Order Payment Info </span> 
                                    </div>


                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text caption">Payable Amount: </span> 
                                        <span class="answer"> KES 40000 </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text text-lighten-2 caption">Payment At: </span> 
                                        <span class="answer "> End of contract </span>
                                    </div>

                                    <OrderPayment
                                        style="margin-left: -21em;"
                                        @save-payment-data="updatePaymentDetails"
                                    />
                                </div>
                            </v-cols>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn fab icon x-small dark color="primary" @click="viewBids">
                                <v-icon small>visibility</v-icon>
                            </v-btn>

                            <v-btn fab icon x-small dark color="pink" @click="publishOrder">
                                <v-icon small >publish</v-icon>
                            </v-btn>

                            <v-btn fab icon dark x-small color="red" @click="cancelOrder">
                                <v-icon class="font-weight-bold">close</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>
                            <v-btn fab icon x-small dark color="red" @click="shareOrder">
                                <v-icon class="font-weight-bold">share</v-icon>
                            </v-btn>

                            <Proposal @save-proposal-data="uploadProposals" />

                            <Bid @save-bid-data="placeBid" />
                        </v-card-actions>
                    </v-card>
                </v-col>
                <!-- End of colum for details -->

                <!-- Column for the description -->
                <v-col cols="12" md="7" style="margin-top: -1em;">

                    <v-card class="description" hover flat color="#f7f8fb" style="max-height:450px;">
                        <v-card-title class="cyan lighten-2">
                            <v-icon left class="font-weight-bold white--text">note</v-icon>
                            <span class="caption white--text font-weight-bold">Order Description</span>

                            <v-spacer></v-spacer>
                            <OrderDescription 
                                @save-description-data="updateDescriptionDetails"
                            />
                        </v-card-title>
                        <v-card-text 
                            class="px-2 pt-3 font-weight-normal"
                            style="color: grey;"
                        >
                            <p style="color: grey;" class="px-3 caption">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus, velit necessitatibus eius deleniti facilis, sequi facere hic dolorem minus, minima odio maiores. Impedit nihil dolore velit non quibusdam, unde modi obcaecati doloremque! Laborum facere voluptatibus, a in blanditiis dolorem reprehenderit iste quo architecto ipsum quod consequuntur? Aut quasi unde pariatur libero incidunt velit. Corporis libero illum voluptatum minima ullam vero facere nemo doloribus voluptates ad repellendus corrupti hic amet quis unde maxime distinctio, ea ex eaque. Nisi eum deserunt dolore deleniti voluptates velit minima, illo perferendis aspernatur vero nemo aliquid quidem corporis sapiente odio quia consequuntur iste obcaecati laborum saepe. Incidunt possimus eum hic. Enim, ex molestias! Praesentium, odio, vitae non molestiae repudiandae quaerat veniam adipisci quo ullam maiores veritatis enim eligendi! Illo assumenda tempora ex optio adipisci, rem voluptate earum quod nemo harum cupiditate aperiam explicabo amet quasi culpa reprehenderit error laudantium provident perspiciatis, doloribus temporibus veniam! Recusandae temporibus laborum obcaecati aliquam ad necessitatibus saepe corporis ipsam alias quam inventore, architecto expedita nihil doloremque tenetur reiciendis, numquam repellat hic? Voluptatibus quia iusto, ipsam modi velit, incidunt officiis, corporis facilis consectetur libero odio repudiandae in a vitae sapiente quos? Veniam qui officia quas. Vel consequuntur numquam quaerat dolores? fugiat minima aliquam alias sequi doloribus molestias natus ut expedita impedit commodi assumenda deleniti? Maiores cupiditate
                            </p>
                        </v-card-text>
                        
                    </v-card>
                    
                </v-col>
                <!-- End of column for the description -->

            </v-row>
 
        </v-container>
    </div>
</template>

<script>
import OrderDescription from "~/components/order/popups/OrderDescription"
import OrderServices from "~/components/order/popups/OrderServices"
import OrderPayment from "~/components/order/popups/OrderPayment"
import OrderDetails from "~/components/order/popups/OrderDetails"
import Proposal from "~/components/order/popups/Proposal"
import Bid from "~/components/order/popups/Bid"

export default {
    // layout
    layout: "loggedInLayout",
    // components
    components: {
        OrderDescription,
        OrderServices,
        OrderPayment,
        OrderDetails,
        Proposal,
        Bid
    },
    // data
    data: () => ({
        menu: false,
        description: "",
        // payment
        payment: {
            payableAmount: "ksh 50000",
            
        },
        //summary
        summary: {
            category: "IT & Software Development",
            contractLength: "~ 2 weeks",
            skillLevel: "Intermediate",
            contractorsNeeded: 5
        },
        //overview
        overview: {
            orderCode: "B4t3iE",
            owner: "Frankline Okari",
            bidNumber: 50,
            acceptingBids: "Yes"
        },
    }),
    methods: {
        // order description
        updateDescriptionDetails(data) {
            console.log(data)
        },
        // order description
        updateServiceDetails(data) {
            console.log(data)
        },
        // order description
        updateDetails(data) {
            console.log(data)
        },
        // order description
        updatePaymentDetails(data) {
            console.log(data)
        },
        // upload proposal
        uploadProposals(data) {
            console.log(data)
        },

        // placebid function
        placeBid() {
            alert("Bid Placed")
        },

        // view Bids
        viewBids() {
            this.$router.push({
                path: `/orders/${this.$route.params.order}/bids`
            })
        },

        // shareOrder
        shareOrder() {
            alert("Sharing Order")
        },

        // publish Order
        publishOrder() {
            alert("Order published")
        },

        // cancel Order
        cancelOrder() {
            alert("Order cancelled")
        },

        // submit proposal
        submitProposal() {
            alert("Proposal Submitted.")
        }
    },
}
</script>


<style scoped>
    .project {
        border-top: 4px solid #4DD0E1 !important;

    }

    .answer {
       font-weight: bolder; 
       color: grey; 
       font-size: .8rem;
       margin-left: -.6em;
    }

    .option {
        font-weight: bolder; 
        margin-right: 1em; 
        
        color: tomato; 
        margin-left: 2.5em;
        
    }

    .title {
        font-weight: bolder; 
        margin-right: 1em; 
        font-size: .9rem; 
        color: #078686;; 
        text-decoration: underline
    }

</style>