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
          color="primary"
          dark
          fab
          icon
          x-small
          v-bind="attrs"
          v-on="on"
          depressed
        >
          <v-icon small left>login</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text">Update Services Details</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!--Order type -->
                <v-select
                    :items="items"
                    label="Deposit Required"
                    prepend-icon="credit_card"
                    v-model="formData.deposit_required"
                ></v-select>
                <!-- End of order type -->
                
                <!-- Payment plan -->
                <v-text-field
                    label="Deposit Amount"
                    type="number"
                    prepend-icon="attach_money"
                    v-model="formData.deposit"
                    :disabled=" formData.deposit_required == 'Yes' ? false : true"
                ></v-text-field>
                <!-- End of payment plan -->

                <!-- Payable Amount -->
                <v-text-field
                    label="Asking Amount"
                    type="number"
                    prepend-icon="attach_money"
                    v-model="formData.asking_amount"
                    hint="Enter Order Payable Amount if content. Otherwise enter your preferred amount."
                ></v-text-field>
                <!-- End of payable amount -->

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
    name: "BidForm",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            asking_amount: "",
            deposit: "",
            deposit_required: ""
        },
        // items
        items: [
            "Yes",
            "No"
        ]
    }),

    methods: {
        submit() {
            this.$emit('save-bid-data', this.formData)
        },
    }
  }
</script>