<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">credit_card</v-icon>
            <span>Transaction History</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >
            <!-- Sorting buttons -->
            <v-row class="mb-3 mx-5">
                <!-- Button for displaying the sort date -->
                <div>
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="true"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text color="pink accent-2" v-on="on" v-bind="attrs"> 
                            <v-icon left small>sort</v-icon>
                            <span class="text-lowercase body-2 font-weight-bold font-italic">By Date</span>
                        </v-btn>
                        </template>
                        <v-date-picker v-model="formData.sort_date" no-title @input="sort_by_date" ></v-date-picker>
                    </v-menu>
                </div>
                <!-- End of button for displaying the sort date -->

                <!-- Button for displaying the button for displaying snackbar for type field -->
                <div>
                    
                    <v-btn text color="teal accent-5"  @click="snackbar_type = !snackbar_type"> 
                        <v-icon small left>sort</v-icon>
                        <span class="text-lowercase body-2 font-weight-bold font-italic">By Type</span>
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

                <v-spacer></v-spacer>

                <div>
                    <span class="teal--text text-accent-5 font-weight-bold mr-2 body-1">user code:</span> 
                    <span class="pink--text text-accent-2 font-weight-bold body-2">JkI7e3</span>
                </div>
 
            </v-row>

            <v-card flat hover ripple class="mb-1 project" v-for="project in projects" :key="project.id" :class="transaction_class(project.transaction_type)">
                <v-row class="px-3">
                    <v-col cols="12" md="4">
                        <div class="caption grey--text font-italic">Transaction Type</div>
                        <div class="caption mt-2 font-weight-bold teal--text tex-accent-2">
                            {{ project.transaction_type }}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Transaction Date</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ project.transaction_date }}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Transaction Amount</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ project.transaction_amount}}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text font-italic">Transaction Recipient</div>
                        <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                            {{ project.recipient }}
                        </div>
                    </v-col>

                    
                    <v-col cols="6" sm="4" md="2">
                        <div class="right">
                            <v-chip small class="my-2 white--text" :color="chip_color(project.status)">
                                {{project.status}}
                            </v-chip>
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
        projects: [
            {   
                id: 1,
                transaction_type: "Token Payment",
                recipient: "Wynix.com",
                transaction_date: "2nd May 20120",
                status: "complete",
                transaction_amount: "KES 2000"
            },
            {   
                id: 2,
                transaction_type: "Order Payment",
                recipient: "Paul Okari",
                transaction_date: "2nd May 20120",
                status: "complete",
                transaction_amount: "KES 2000"
            },
            {   
                id: 3,
                transaction_type: "Order Publishing",
                recipient: "Frankline Njoroge",
                transaction_date: "2nd May 20120",
                status: "cancelled",
                transaction_amount: "KES 2000"
            },
            {   
                id: 4,
                transaction_type: "Token Payment",
                recipient: "Wynix.com",
                transaction_date: "2nd May 20120",
                status: "ongoing",
                transaction_amount: "KES 2000"
            }
        ]
    }),
    methods: {
        chip_color(status) {
            if (status == "complete") {return "#3cd1c2"}
            if (status == "ongoing") {return "orange"}
            return "#f83e70"
        },

        transaction_class(transaction_type) {
            if(transaction_type == "Order Publishing") {return "order-publishing"}
            if(transaction_type == "Order Payment") {return "order-payment"}
            return "token-payment"
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
    .project.order-payment {
        border-left: 4px solid #3cd1c2;
        border-right: 4px solid #3cd1c2;
        border-bottom: 1px solid #3cd1c2;
    }
    .project.order-publishing {
        border-left: 4px solid tomato;
        border-right: 4px solid tomato;
        border-bottom: 1px solid tomato;
        
    }
    .project.token-payment {
        border-left: 4px solid orange;
        border-right: 4px solid orange;
        border-bottom: 1px solid orange;
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