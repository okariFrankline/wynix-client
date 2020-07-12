<!-- Displays the dashboard for a user registerd as a practice/freelance -->
<template>
    <div class="dashboard" style="margin-bottom: -2em;">
        
        <!-- content of the dashboard -->
        <v-container>
            <v-row>
                <!-- Column for the details -->
                <v-col cols="12" md="5">
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

                        <v-col cols="12" md="8" class="mt-5">
                            <div style="margin-bottom: .1em;">
                                <v-icon small class="ml-7">account_balance</v-icon>
                                <span class="caption option pink--text">Type: </span> 
                                <span class="caption answer orange--text"> {{ practise.practise_type }} </span>
                            </div>

                            <!-- Platform rank -->
                            <div style="margin-bottom: .1em;">
                                <v-icon small class="ml-7">military_tech</v-icon>
                                <span class="caption option pink--text">Rank: </span> 
                                <span class="caption answer orange--text"> {{ practise.rank }} </span>
                            </div>
                            <!-- End of the platform rank -->

                            <!-- Expertise level -->
                            <div style="margin-bottom: .1em;">
                                <v-icon small class="ml-7">emoji_events</v-icon>
                                <span class="caption option pink--text">Level: </span> 
                                <span class="caption answer orange--text"> {{ practise.expertise_level }} </span>
                            </div>
                            <!-- End of the expert level -->

                            <!-- Rating for the practise -->
                            <div style="margin-bottom: .1em;">
                                <v-icon small class="ml-3" color="">thumb_up</v-icon>
                                <span class="caption option pink--text">Rating: </span> 
                                <v-rating
                                    :value="practise.rating"
                                    readonly
                                    background-color="grey"
                                    color="orange"
                                    small
                                    dense
                                    style="margin-left: 2em;"
                                    half-increments
                                    class="ml-10"
                                ></v-rating>
                            </div>
                            <!-- End of the practise rating -->
                        </v-col>
                    </v-row>

                    <v-card flat class="project" color="#f7f8fb">
                       
                        <v-card-text class="text-left ml-5 pl-5">
                            <v-cols cols="12" md="6">
                                <div style="margin-left: -1em;">
                                    <div style="margin-bottom: .3em; margin-top: .1em;">
                                        <v-icon left small class="font-weight-bold error--text">home_work</v-icon>
                                        <span class="caption font-weight-bold title error--text">Practise Account Details </span>
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
                                        <v-icon small class="ml-7" color="blue">phone</v-icon>
                                        <span class="caption option blue--text caption">Phone number: </span> 
                                        <span class="answer caption"> {{ practise.phone }} </span>
                                    </div>

                                    <!-- Nationality -->
                                    <div style="margin-bottom: .1em;">
                                        <v-icon small class="ml-7" color="blue">bubble_chart</v-icon>
                                        <span class="option blue--text caption">Practise Status: </span> 
                                        <span class="answer caption"> {{ practise.status }} </span>
                                    </div>

                                    <!-- Edit button -->
                                    <AccountDetails 
                                        style="margin-left: -20em;"
                                        :account=" {...practise.email, ...practise.phone, ...practise.full_name} "
                                        @save-account-data="updateAccountDetails"
                                    />
                                    <!-- End of edit button -->
                                </div>

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>
                                
                                <!-- Location Details -->
                                <div style="margin-left: -1em;">
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold error--text">my_location</v-icon>
                                        <span class="caption font-weight-bold title error--text">Practise Location Details </span>
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
                                        <span class="option blue--text caption">Operate outside base location?: </span> 
                                        <span class="answer caption"> {{ practise.outside_operation }}  </span>
                                    </div>

                                    <!-- Edit button -->
                                    <LocationDetails 
                                        style="margin-left: -20em;"
                                        :country="practise.country"
                                        :city="practise.city"
                                        :outside_operation="practise.outside_operation"
                                        @save-location-data="updateLocationDetails"
                                    />
                                    <!-- End of edit button -->

                                </div>
                                <!-- End of the location details -->

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>

                                <!-- Expertise Details -->
                                <div style="margin-left: -1em;">
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold error--text">credit_card</v-icon>
                                        <span class="caption font-weight-bold title error--text">Practise Expertise </span> 
                                    </div>
                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <ul>
                                            <li class="option blue--text ml-5 caption" v-for="expertise in practise.expert_in" :key="expertise">
                                                {{ expertise }}
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Edit button -->
                                    <Services 
                                        style="margin-left: -20em;"
                                        @save-services-data="updateServicesDetails"
                                    />
                                    <!-- End of edit button -->

                                </div>
                                <!-- End of the expertise details -->

                                <v-divider class="mt-4" style="margin-left: -3em;"></v-divider>

                                <!-- Client Comments -->
                                <div style="margin-left: -2em;">
                                    <div style="margin-bottom: .3em; margin-top: 1em;">
                                        <v-icon left small class="font-weight-bold error--text">chat_bubble_outline</v-icon>
                                        <span class="caption font-weight-bold title error--text">What previous clients say </span> 
                                    </div>

                                    <!-- Birth date -->
                                    <div style="margin-bottom: .1em;">
                                        <div style="margin-bottom: -1.2em;" v-for="comment in practise.comments" :key="comment.id">
                                            <div class="font-italic font-weight-bold blue--text ml-2 caption">~{{ comment.owner}}</div>
                                            <p class="ml-7 font-weight-bold font-italic caption">
                                                {{ comment.comment }}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <!-- End of the client's comments -->

                            </v-cols>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                
                            <v-btn small text dark color="pink" @click="() => this.$router.back()">
                                <v-icon left>undo</v-icon>
                                <span class="text-lowercase caption">back to bids</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <!-- End of colum for details -->

                <!-- Column for the description -->
                <v-col cols="12" md="7" style="margin-top: -1em;" class="mt-1">

                    <v-card flat color="#f7f8fb">
                        <v-card-title class="cyan lighten-2">
                            <v-icon left class="font-weight-bold white--text">note</v-icon>
                            <span class="body-2 white--text font-weight-bold caption">Practioner Biography</span>

                            <v-spacer></v-spacer>
                            <Descriptions 
                                @save-description-data="updateDescriptionDetails"
                            />
                        </v-card-title>
                        <v-card-text 
                            class="px-2 pt-3 font-weight-normal"
                            style="color: grey;"
                        >
                            <p style="color: grey; font-weight: normal;" class="px-3 caption">
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
import AccountDetails from "~/components/practise/popups/AccountDetails"
import LocationDetails from "~/components/practise/popups/LocationDetails"
import Services from "~/components/practise/popups/Services"
import Descriptions from "~/components/practise/popups/Descriptions"

export default {
    // layout
    layout: "loggedInLayout",
    // components
    components: {
        AccountDetails,
        LocationDetails,
        Services,
        Descriptions
    },
    // data
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
            practise_type: "Freelance Practise",
            full_name: "Frankline Okari",
            email: "okarifrankline@gmail.com",
            phone: "+254 723007945",
            status: "Active",
            country: "Kenya",
            city: "Nairobi",
            outside_operation: "Yes",
            expertise_level: "Professional",
            expert_in: [
                "Mobile App Development",
                "Website Development",
                "IT consultancy"
            ],
            comments: [
                {
                    owner: "okarifrank",
                    id: 1,
                    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint modi suscipit molestiae porro? Corporis nemo est in veritatis accusantium alias?"
                },
                {
                    owner: "donnanjeri",
                    id: 2,
                    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint modi suscipit molestiae porro? Corporis nemo est in veritatis accusantium alias?"
                },
            ]
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
        // submit account details
        updateAccountDetails(data) {
            console.log(data)
        },
        // update location details
        updateLocationDetails(data) {
            console.log(data)
        },
        // update location details
        updateServicesDetails(data) {
            console.log(data)
        },
        // update location details
        updateDescriptionDetails(data) {
            console.log(data)
        },

    },
}
</script>


<style scoped>
    .project {
        border-bottom: 4px solid tomato !important;    
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