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
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">change Email</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text body-2 font-weight-bold">Update Account Email Address</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!-- Base Country of the practise -->
                <v-text-field 
                    label="New Email" 
                    v-model="formData.email" 
                    prepend-icon="email"
                ></v-text-field>
                <!-- End of country field -->

                <!-- City field -->
                <v-text-field 
                    label="Current Password" 
                    v-model="formData.currentPassword"
                    prepend-icon="lock"
                    type="password"
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
    name: "ChangeEmailForm",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            currentPassword: "",
            email: ""
        }
    }),
    methods: {
        submit() {
            this.$emit('save-email-data', this.formData)
        }
    }
  }
</script>