<!-- Displays form for editing and creating new location details -->
<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
      color="red"
    >

      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          text
          outlined
          small
          v-bind="attrs"
          v-on="on"
          depressed
        >
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">edit details</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text">Update Order Details</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!--Order type -->
                <v-select
                    :items="items"
                    label="Proposal required?"
                    prepend-icon="contact_support"
                    v-model="formData.proposal_required"
                ></v-select>
                <!-- End of order type -->

                <!-- Payable Amount -->
                <v-text-field
                    label="Number of contractors needed"
                    type="number"
                    prepend-icon="plus_one"
                    v-model="formData.contractors_needed"
                ></v-text-field>
                <!-- End of payable amount -->

                <!-- Order length -->
                <v-text-field
                    label="Length of contract"
                    prepend-icon="graphic_eq"
                    v-model="formData.contract_length"
                ></v-text-field>
                <!-- End of order length -->
            
                <!-- Bidding deadline -->
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="formData.bid_deadline"
                        label="Not accepting deadline beyond"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker no-title v-model="formData.bid_deadline" @input="menu = false"></v-date-picker>
                </v-menu>
                <!--End of bidding deadline -->

                <v-row>
                    <!-- Cancel Button -->
                    <v-btn 
                        dark
                        small
                        text
                        color="error" 
                        depressed 
                        @click="dialog = false"
                    >
                        <v-icon left small class="error--text">close</v-icon>
                        <span class="text-capitalize error--text">cancel</span>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <!-- Submit button -->
                    <v-btn 
                        dark
                        small
                        text
                        color="success" 
                        depressed 
                        @click="submit"
                    >
                        
                        <span class="text-capitalize success--text">submit</span>
                        <v-icon right small class="success--text">send</v-icon>
                    </v-btn>
                    <!-- End of the submit button -->
                </v-row>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import format from "date-fns/format"
  export default {
    name: "OrderDetails",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // menu
        menu: false,
        // form data
        formData: {
            bid_deadline: "",
            contractors_needed: "",
            proposal_required: "",
            contract_length: "",
            bid_deadline: ""
        },
        // items
        items: [
            "Yes",
            "No"
        ]
    }),

    methods: {
        submit() {
            this.$emit('save-details-data', this.formData)
        },
    }
  }
</script>