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
          <v-icon small left>create</v-icon>
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">edit payment</span>
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
                    :items="currencies"
                    label="Select Order type"
                    prepend-icon="credit_card"
                    item-text="name"
                    item-value="value"
                    v-model="formData.currency"
                ></v-select>
                <!-- End of order type -->
                
                <!-- Payment plan -->
                <v-select
                    :items="periods"
                    label="Payment made"
                    prepend-icon="credit_card"
                    v-model="formData.payment_plan"
                ></v-select>
                <!-- End of payment plan -->

                <!-- Payable Amount -->
                <v-text-field
                    label="Payable Amount"
                    type="number"
                    prepend-icon="attach_money"
                    v-model="formData.payable_amount"
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
    name: "OrderPayment",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            payable_amount: "",
            currency: "",
            payment_plan: ""
        },
        // items
        currencies: [
            {
                name: "Kenya Shilling",
                value: "KES"
            },
            {
                name: "Ugandan Shilling",
                value: "UGX"
            },
            {
                name: "Tanzania Shilling",
                value: "TZS"
            },
            {
                name: "Rwandan Franc",
                value: "RWF"
            },
            {
                name: "Burundi Franc",
                value: "BIF"
            },
            {
                name: "South Sudan Pound",
                value: "SSP"
            },
            {
                name: "Ethiopian Birr",
                value: "ETB"
            },
            {
                name: "Somali Shilling",
                value: "SOS"
            }
        ],
        // periods
        periods: [
            "At end of contract",
            "Per hour",
            "Per day",
            "Per week",
            "Per month"
        ]
    }),

    methods: {
        submit() {
            this.$emit('save-payment-data', this.formData)
        },
    }
  }
</script>