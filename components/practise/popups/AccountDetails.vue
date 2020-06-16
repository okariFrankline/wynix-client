<!-- Displays form for editing and creating new account details -->
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
          <v-icon small left>edit</v-icon>
          <span class="text-capitalize font-weight-bold" style="text-decoration: underline">edit account</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text">Update Practise Details</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!-- Full name of the practise -->
                <v-text-field 
                    :value=" account ? account.full_name : '' "
                    label="Practise Full name" 
                    v-model="formData.full_name" 
                    prepend-icon="account_circle"
                ></v-text-field>
                <!-- End of full name field -->

                <!-- Email field -->
                <v-text-field 
                    :value=" account ? account.email : '' "
                    label="Practise Contact/Authentication email" 
                    v-model="formData.email" 
                    prepend-icon="email"
                    type="email"
                ></v-text-field>
                <!-- End of email field -->

                <!-- Phone field -->
                <v-text-field
                    :value=" account ? account.phone : '' "
                    label="Practise phone number" 
                    v-model="formData.phone" 
                    prepend-icon="phone"
                ></v-text-field>
                <!-- End of email field -->

                <v-row>
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
    name: "AccountDetailsPopup",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            email: "",
            phone: "",
            full_name: ""
        }
    }),
    // props
    props: {
        account: {
            type: Object
        }
    },

    computed: {
    },

    methods: {
        submit() {
            this.$emit('save-account-data', this.formData)
        }
    }
  }
</script>