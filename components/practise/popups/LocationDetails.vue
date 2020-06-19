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
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">edit location</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="body-1 teal accent-4"
          primary-title
        >
          <span class="white--text caption">Update Location Details</span>
        </v-card-title>

        <!-- content for the pop up -->
        <v-card-text>
            <!-- Form -->
            <v-form class="px-3"> 
                <!-- Base Country of the practise -->
                <v-text-field 
                    :value="country ? country : ''"
                    label="Base Country" 
                    v-model="formData.country" 
                    prepend-icon="place"
                ></v-text-field>
                <!-- End of country field -->

                <!-- City field -->
                <v-text-field 
                    :value="city ? city : ''"
                    label="Base City" 
                    v-model="formData.city" 
                    prepend-icon="person_pin"
                ></v-text-field>
                <!-- End of city field -->

                <!-- Phone field -->
                <v-select
                    :items="items"
                    :value=" outside_operation ? outside_operation : '' "
                    label="Operate outside base location?" 
                    v-model="formData.outside_operation" 
                    prepend-icon="contact_support"
                ></v-select>
                <!-- End of email field -->

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
    name: "LocationDetailsPopup",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            city: "",
            country: "",
            outside_operation: ""
        },
        // items
        items: [
            "Yes",
            "No"
        ]
    }),
    // props
    props: {
        country: {
            type: String
        },
        city: {
            type: String
        },
        outside_operation: {
            type: String
        }
    },

    computed: {
    },

    methods: {
        submit() {
            this.$emit('save-location-data', this.formData)
        },
        showData() {
            console.log(this.city, this.country, this.outside_operation)
        },
    }
  }
</script>