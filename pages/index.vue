<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        <script src="https://unpkg.com/vue-material"></script>
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">credit_card</v-icon>
            <span>User Dashboard</span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >


            
                <md-empty-state
                    style="color: red;"
                    md-icon="devices_other"
                    md-label="Create your first project"
                    md-description="Creating project, you'll be able to upload your design and collaborate with people.">
                    <md-button class="md-primary md-raised">Create first project</md-button>
                </md-empty-state>
            
            
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
                transaction_type: "Available Orders",
                recipient: "Wynix.com",
                transaction_date: "2nd May 20120",
                status: "complete",
                transaction_amount: "KES 2000",
                icon: "business_center"
            },
            {   
                id: 5,
                transaction_type: "My Bids",
                recipient: "Wynix.com",
                transaction_date: "2nd May 20120",
                status: "ongoing",
                transaction_amount: "KES 2000",
                icon: "credit_card"
            },
            {   
                id: 2,
                transaction_type: "Assigned orders",
                recipient: "Paul Okari",
                transaction_date: "2nd May 20120",
                status: "complete",
                transaction_amount: "KES 2000",
                icon: "credit_card"
            },
            {   
                id: 3,
                transaction_type: "My Practise",
                recipient: "Frankline Njoroge",
                transaction_date: "2nd May 20120",
                status: "cancelled",
                transaction_amount: "KES 2000",
                icon: "credit_card"
            },
            {   
                id: 4,
                transaction_type: "Transaction History",
                recipient: "Wynix.com",
                transaction_date: "2nd May 20120",
                status: "ongoing",
                transaction_amount: "KES 2000",
                icon: "credit_card"
            },
 
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