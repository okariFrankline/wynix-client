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
          color="red"
          fab
          dark
          icon
          x-small
          v-bind="attrs"
          v-on="on"
          depressed
        >
            <v-icon class="font-weight-bold">upgrade</v-icon>
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
                <!-- Order length -->
                <v-file-input 
                    small-chips 
                    multiple 
                    label="Select Proposal"
                ></v-file-input>
                <!-- End of order length -->
            
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
            proposals: []
        },
        // items
        items: [
            "Yes",
            "No"
        ]
    }),

    methods: {
        submit() {
            this.$emit('save-proposal-data', this.formData)
        },
    }
  }
</script>