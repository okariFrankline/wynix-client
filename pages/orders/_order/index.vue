<!-- Displays a list of all the available order, quotations, proposals -->
<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        <!-- content of the dashboard -->
        <v-container >
            <v-row>
                <!-- Column for the details -->
                <v-col cols="12" md="5">
                      

                    <v-card flat hover class="project">
                        <v-card-text class="text-left ml-5 pl-5">
                            <v-cols cols="12" md="6">
                                <div>
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold">subject</v-icon>
                                        <span class="body-2 font-weight-bold title">Order Overview </span>
                                        <v-btn x-small depressed text color="primary" outlined shaped>
                                            <v-icon left small>create</v-icon>
                                            <span class="text-capitalize">Edit</span>
                                        </v-btn>
                                    </div>
                                    <!-- Full Name -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text"><span class="grey--text mr-1 ml-2">-</span>Order Code: </span> 
                                        <span class="caption answer"> {{overview.orderCode}} </span>
                                    </div>

                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text"><span class="grey--text mr-1 ml-2">-</span>Order Type: </span> 
                                        <span class="caption answer"> Long Term Contract </span>
                                    </div>

                                    <!-- Accepting Bids -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="caption option error--text"><span class="grey--text mr-1 ml-2">-</span>Order Category: </span> 
                                        <span class="caption answer"> Mobile App Development </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span>Order Status: </span> 
                                        <span class="answer"> Unpublished </span>
                                    </div>
                                </div>
                                
                                <div>
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold">history</v-icon>
                                        <span class="body-2 font-weight-bold title">Order Details </span>
                                        <v-btn x-small depressed text color="primary" outlined shaped>
                                            <v-icon left small>create</v-icon>
                                            <span class="text-capitalize">Edit</span>
                                        </v-btn>
                                    </div>
                                    
                                     <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span>Bidding/Submission Deadline: </span> 
                                        <span class="answer"> 22nd October 2020 </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span>Order Length: </span> 
                                        <span class="answer"> ~ 3 Months </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span>Contractors Needed: </span> 
                                        <span class="answer"> 1  </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span>Proposal Required: </span> 
                                        <span class="answer"> Yes </span>
                                    </div>
                                </div>

                                <!-- Payment information -->
                                <div>
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold">credit_card</v-icon>
                                        <span class="body-2 font-weight-bold title">Order Payment Info </span> 
                                        <v-btn x-small depressed text color="primary" outlined right>
                                            <v-icon left small>create</v-icon>
                                            <span class="text-capitalize">Edit</span>
                                        </v-btn>
                                    </div>


                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text"><span class="grey--text mr-1 ml-2">-</span> Payable Amount: </span> 
                                        <span class="answer"> KES 40000 </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <span class="option error--text text-lighten-2"> <span class="grey--text mr-1 ml-2">-</span> Payment At: </span> 
                                        <span class="answer "> End of contract </span>
                                    </div>
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

                            <v-btn fab icon x-small dark color="red" @click="submitProposal">
                                <v-icon class="font-weight-bold">upgrade</v-icon>
                            </v-btn>

                            <v-btn x-small icon fab dark color="primary" @click="placeBid">
                                <v-icon>login</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <!-- End of colum for details -->

                <!-- Column for the description -->
                <v-col cols="12" md="7" style="margin-top: -1em;">

                    <v-card class="description" flat hover>
                        <v-card-title class="cyan lighten-2">
                            <v-icon left class="font-weight-bold white--text">note</v-icon>
                            <span class="body-2 white--text font-weight-bold">Order Description</span>

                            <v-spacer></v-spacer>
                            <v-btn x-small dark color="white" icon>
                                <v-icon color="white">create</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text 
                            class="px-2 pt-3 font-weight-normal"
                            style="color: grey;"
                        >
                            <p style="color: grey; font-weight: bold;" class="px-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus, velit necessitatibus eius deleniti facilis, sequi facere hic dolorem minus, minima odio maiores. Impedit nihil dolore velit non quibusdam, unde modi obcaecati doloremque! Laborum facere voluptatibus, a in blanditiis dolorem reprehenderit iste quo architecto ipsum quod consequuntur? Aut quasi unde pariatur libero incidunt velit. Corporis libero illum voluptatum minima ullam vero facere nemo doloribus voluptates ad repellendus corrupti hic amet quis unde maxime distinctio, ea ex eaque. Nisi eum deserunt dolore deleniti voluptates velit minima, illo perferendis aspernatur vero nemo aliquid quidem corporis sapiente odio quia consequuntur iste obcaecati laborum saepe. Incidunt possimus eum hic. Enim, ex molestias! Praesentium, odio, vitae non molestiae repudiandae quaerat veniam adipisci quo ullam maiores veritatis enim eligendi! Illo assumenda tempora ex optio adipisci, rem voluptate earum quod nemo harum cupiditate aperiam explicabo amet quasi culpa reprehenderit error laudantium provident perspiciatis, doloribus temporibus veniam! Recusandae temporibus laborum obcaecati aliquam ad necessitatibus saepe corporis ipsam alias quam inventore, architecto expedita nihil doloremque tenetur reiciendis, numquam repellat hic? Voluptatibus quia iusto, ipsam modi velit, incidunt officiis, corporis facilis consectetur libero odio repudiandae in a vitae sapiente quos? Veniam qui officia quas. Vel consequuntur numquam quaerat dolores? Hic nemo quidem neque laudantium dolor recusandae officia odit, nobis illum culpa, voluptates accusantium eius fugiat minima aliquam alias sequi doloribus molestias natus ut expedita impedit commodi assumenda deleniti? Maiores cupiditate fuga nesciunt ex ad illo sapiente asperiores amet error ipsam, nam eveniet facere voluptas deserunt dolores, quas debitis totam officiis cumque est. Quae rerum possimus ipsa ipsam quo, perferendis, soluta ullam tenetur provident praesentium, exercitationem illum voluptas numquam eos enim dolor eius incidunt velit voluptatum! Voluptatum perferendis porro delectus molestiae excepturi aspernatur magnam dolore maiores alias, reprehenderit enim perspiciatis voluptatibus blanditiis tenetur impedit quidem. Impedit omnis facilis asperiores odio magni.
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
export default {
  layout: "loggedInLayout",
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

        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "lime-borders",
                "pink-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
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
        border-bottom: 4px solid #4DD0E1 !important;    
        border-top: 4px solid #4DD0E1 !important;

    }
    .description {
        border-bottom: 4px solid #4DD0E1 !important;    
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
        font-size: .8rem;
        color: #ae4a1f; 
        margin-left: .7em;
        
    }

    .title {
        font-weight: bolder; 
        margin-right: 1em; 
        font-size: .9rem; 
        color: #078686;; 
        text-decoration: underline
    }

</style>