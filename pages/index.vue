<template>
  <div class="team mt-3">

    <v-container class="mx-2">
      <v-row wrap>
        <!-- start of card -->
            
            <!-- the image column -->
            <v-col cols=12 md=5 class="mt-n5 ml-10">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-avatar right size="140" class="mb-2 elevation-3 ml-2">
                            <img src="/images/person.jpg" class="grey lighten-1">
                        </v-avatar>
                        <div>
                        <!-- <v-chip class="cyan ml-5 small">
                            <span class="text-center white--text darken-4 text-capitalize caption">
                                {{ practise.owner.username}}
                            </span>
                        </v-chip> -->
                        </div>
                    </v-col>

                    <v-col cols="12" md="8" class="mt-8">
                        <div class="mb-1">
                            <v-icon small class="ml-7">account_balance</v-icon>
                            <span class="caption option pink--text">Acc Type: </span> 
                            <span class="caption answer orange--text"> {{ practise.accountType }} </span>
                        </div>

                        <!-- Platform rank -->
                        <div class="mb-1">
                            <v-icon small class="ml-7">military_tech</v-icon>
                            <span class="caption option pink--text">Is Suspended?: </span> 
                            <span class="caption answer orange--text"> {{practise.isSuspended }} </span>
                        </div>
                        <!-- End of the platform rank -->

                        <!-- Expertise level -->
                        <div style="margin-bottom: .1em;">
                            <v-icon small class="ml-7">emoji_events</v-icon>
                            <span class="caption option pink--text">Code: </span> 
                            <span class="caption answer orange--text"> {{ practise.accountCode }} </span>
                        </div>
                        <!-- End of the expert level -->

                        <!-- Expertise level -->
                        <div style="margin-bottom: .1em;">
                            <v-row class="ml-n5 mt-3">
                                <v-col>
                                    <span class="caption option green--text">-Publish Tokens: </span> 
                                    <span class="caption answer red--text"> 10 </span>
                                </v-col>

                                <v-col class="ml-n7">
                                    <span class="caption option green--text">-Bid Tokens: </span> 
                                    <span class="caption answer red--text"> 5 </span>
                                </v-col>
                            </v-row>
                        </div>
                        <!-- End of the expert level -->
                    </v-col>
                </v-row>
                 <!-- Card for holfing basic account information -->
                <v-card flat class="project mt-n3" color="#f7f8fb">
                    
                    <v-card-text class="text-left ml-5 pl-5">
                        <v-cols cols="12" md="6">
                            <div style="margin-left: -1em;">
                                <div style="margin-bottom: .3em; margin-top: .1em;">
                                    <v-icon left small class="font-weight-bold error--text">vpn_lock</v-icon>
                                    <span class="caption font-weight-bold title error--text">Account Authentication Details </span>
                                </div>

                                <!-- Full Name -->
                                <div style="margin-bottom: .1em;">
                                    <v-icon small class="ml-7" color="blue">contacts</v-icon>
                                    <span class="caption option blue--text caption">Full name: </span> 
                                    <span class="answer caption"> {{ practise.full_name }} </span>
                                </div>

                                <!-- Birth date -->
                                <div style="margin-bottom: .1em;">
                                    <v-icon small class="ml-7" color="blue">email</v-icon>
                                    <span class="caption option blue--text caption">Email Address: </span> 
                                    <span class="answer caption"> {{ practise.email }} </span>
                                </div>

                                <!-- Accepting Bids -->
                                <div style="margin-bottom: .1em;">
                                    <v-icon small class="ml-7" color="blue">account_circle</v-icon>
                                    <span class="caption option blue--text caption">Username: </span> 
                                    <span class="answer caption"> {{ practise.username }} </span>
                                </div>

                                <div style="margin-bottom: .1em;">
                                    <v-icon small class="ml-7" color="blue">visibility_off</v-icon>
                                    <span class="caption option blue--text caption">Password: </span> 
                                    <span class="answer caption"> ************ </span>
                                </div>

                            </div>

                            <!-- actions for edting the password and the auth email-->
                            <v-card-actions class="mt-10 mb-n3">
                            <ChangeEmailForm 
                                @save-email-data="changeEmail"
                                class="ml-n7"
                            />

                            <v-spacer></v-spacer>
                            <ChangePasswordForm 
                                @save-password-data="changePassword"
                                class="ml-n7"
                            />

                        </v-card-actions>
                            
                        </v-cols>
                    </v-card-text>

                </v-card>
                <!-- End of card for holding basic card information -->
            </v-col>
            <!-- end of the image column -->

            <!-- Details column -->
            <v-col cols=12 md=6>
                <v-card flat class="project ml-5" color="#f7f8fb">
                       
                        <v-card-text class="text-left ml-5 pl-5">
                            <v-cols cols="12" md="6">
                                <div class="ml-5">
                                    <div style="margin-bottom: .3em; margin-top: .1em;">
                                        <v-icon left small class="font-weight-bold error--text">account_balance</v-icon>
                                        <span class="caption font-weight-bold title error--text">Banking Information </span>
                                    </div>

                                    <!-- Full Name -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small class="ml-7" color="blue">contacts</v-icon>
                                        <span class="caption option blue--text caption">Bank name: </span> 
                                        <span class="answer caption"> {{ practise.full_name }} </span>
                                    </div>

                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small class="ml-7" color="blue">email</v-icon>
                                        <span class="caption option blue--text caption">Bank Branch: </span> 
                                        <span class="answer caption"> {{ practise.email }} </span>
                                    </div>

                                    <!-- Accepting Bids -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small class="ml-7" color="blue">phone</v-icon>
                                        <span class="caption option blue--text caption">Account Number: </span> 
                                        <span class="answer caption"> {{ practise.phone }} </span>
                                    </div>

                                    <BankingInfo 
                                        @save-banking-info="saveBankingInfo"
                                        style="margin-left: -25em;"
                                    />

                                </div>

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>
                                
                                <!-- Location Details -->
                                <div class="ml-5">
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold error--text">my_location</v-icon>
                                        <span class="caption font-weight-bold title error--text">Online & Mobile Payment Options </span>
                                    </div>
                                    
                                     <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">person_pin</v-icon>
                                        <span class="option blue--text caption">Paypal Account: </span> 
                                        <span class="answer"> {{ practise.country }} </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">room</v-icon>
                                        <span class="option blue--text caption">Payoneer Account: </span>
                                        <span class="answer"> {{ practise.city }} </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">contact_support</v-icon>
                                        <span class="option blue--text caption">Mpesa Number: </span> 
                                        <span class="answer caption"> {{ practise.outside_operation }}  </span>
                                    </div>

                                    <MobilePayment
                                        @save-payment-info="savepayment"
                                        style="margin-left: -25em;"
                                    />

                                </div>
                                <!-- End of the location details -->

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>
                                
                                <!-- Location Details -->
                                <div class="ml-5">
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold error--text">my_location</v-icon>
                                        <span class="caption font-weight-bold title error--text">Location Details </span>
                                    </div>
                                    
                                     <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">person_pin</v-icon>
                                        <span class="option blue--text caption">Base Country: </span> 
                                        <span class="answer"> {{ practise.country }} </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">room</v-icon>
                                        <span class="option blue--text caption">Base City: </span> 
                                        <span class="answer"> {{ practise.city }} </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small color="blue" class="ml-7">contact_support</v-icon>
                                        <span class="option blue--text caption">Physical Address: </span> 
                                        <span class="answer caption"> {{ practise.outside_operation }}  </span>
                                    </div>

                                    <LocationInfo
                                        @save-location-info="saveLocation"
                                        style="margin-left: -25em;"
                                    />

                                </div>
                                <!-- End of the location details -->

                            </v-cols>
                        </v-card-text>

                                                    <!-- actions for edting the password and the auth email-->
                        <v-card-actions class="mt-3 mb-n3">
                            <v-btn text x-small dark color="pink" class="ml-1" @click="viewBids">
                                <v-icon small left>add_shopping_cart</v-icon>
                                <span class="text-capitalize font-weight-bold caption">Buy Publish Tokens</span>
                            </v-btn>

                            <v-spacer></v-spacer>
                            <v-btn text x-small dark color="pink" class="ml-n7 mr-3" @click="viewBids">
                                <v-icon small left>add_shopping_cart</v-icon>
                                <span class="text-capitalize font-weight-bold caption">Buy Bid Tokens</span>
                            </v-btn>

                        </v-card-actions>
                    </v-card>
            </v-col>
            <!-- end of details column -->
        <!-- end of card -->
        </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ChangeEmailForm from "~/components/account/ChangeEmailForm"
import ChangePasswordForm from "~/components/account/ChangePasswordForm"
import BankingInfo from "~/components/account/BankingInfo"
import MobilePayment from "~/components/account/MobilePayment"
import LocationInfo from "~/components/account/LocationInfo"

export default {
  layout: "loggedInLayout",
  name: 'Account',
  components: {
   ChangeEmailForm,
   ChangePasswordForm,
   BankingInfo,
   MobilePayment,
   LocationInfo
  },
  data: () => ({
        menu: false,
        rating: 3.3,
        description: "",
        // practise
        practise: {
            owner: {
                username: "okarifrank"
            },
            rank: "Gold",
            rating: 3.3,
            accountType: "Client Account",
            full_name: "Frankline Okari",
            email: "okarifrankline@gmail.com",
            phone: "+254 723007945",
            status: "Active",
            country: "Kenya",
            city: "Nairobi",
            outside_operation: "Yes",
            expertise_level: "Professional",
            accountCode: "clt-ahj348ijr",
            isSuspended: false,
            username: "okarifrankline5678"
        },
    }),
    // computed
    methods: {
        changeEmail(data) {
            console.log(data)
        },
        // change password
        changePassword(data) {
            console.log(data)
        },
        // sae banking info
        saveBankingInfo(data) {
            console.log(data)
        },
        // save payment
        savePayment(data) {
            console.log(data)
        },
        // save payment
        saveLocation(data) {
            console.log(data)
        },
    }
}
</script>

<style scoped>
    .project {
        /* border-bottom: 4px solid tomato !important;     */
        border-top: 4px solid tomato !important;

    }

    .answer {
       font-weight: bolder; 
       color: grey; 
       font-size: .8rem;
       margin-left: -.6em;
    }

    .list {
        margin-top: -1em;
        font-size: .8rem;
        font-weight: bolder;
        margin-bottom: -.5em;
    }

    .option {
        font-weight: bolder; 
        margin-right: 1em; 
        color: #ae4a1f; 
        margin-left: .7em;
        
    }

    .title {
        font-weight: bolder; 
        margin-right: 1em; 
        font-size: .9rem; 
        color: #078686;; 
    }


</style>