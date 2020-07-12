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
          @click="showData"
        >
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">Edit payment</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text body-2 font-weight-bold">Update Online & Mobile Payment</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!-- Base Country of the practise -->
                <v-text-field 
                    label="Paypal Account" 
                    v-model="formData.paypal" 
                    prepend-icon="account_balance"
                ></v-text-field>
                <!-- End of country field -->

                <!-- City field -->
                <v-text-field 
                    label="Payoneer Account" 
                    v-model="formData.payoneer"
                    prepend-icon="account_balance_wallet"
                ></v-text-field>
                <!-- End of city field -->

                <!-- City field -->
                <v-text-field 
                    label="Mpesa Number" 
                    v-model="formData.mpesaNumber"
                    prepend-icon="credit_card"
                ></v-text-field>
                <!-- End of city field -->

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
                        <span class="text-capitalize error--text">close</span>
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
    name: "BankingInfo",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            paypal: "",
            payoneer: "",
            mpesaNumber: ""
        }
    }),
    methods: {
        submit() {
            this.$emit('save-payment-data', this.formData)
        }
    }
  }
</script>