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
          <span class="text-capitalize font-weight-bold caption" style="text-decoration: underline">edit service</span>
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
                    :items="types"
                    label="Select Order type"
                    prepend-icon="sort"
                    v-model="formData.order_type"
                ></v-select>
                <!-- End of order type -->

                <!-- Phone field -->
                <v-select
                    v-model="formData.order_category"
                    :items="categories"
                    chips
                    prepend-icon="sort"
                    color="blue-grey lighten-2"
                    label="Service Required"
                    item-text="name"
                    item-value="name"

                >
                    <!-- Template for render selected data -->
                    <template
                        slot="selection"
                        slot-scope="data"
                    >
                        <v-chip
                            :input-value="data.selected"
                            close
                            class="chip--select-multi"
                            @input="remove(data.item)"
                        >
                            {{ data.item.name }}
                        </v-chip>
                    </template>

                    <!-- Template for render data when the select is expanded -->
                    <template
                        slot="item"
                        slot-scope="data"
                    >
                        <!-- Divider and Header-->
                        <template v-if="typeof data.item !== 'object'">
                            <v-list-tile-content v-text="data.item"/>
                        </template>
                        <!-- Normal item -->
                        <template v-else>
                            <v-list-item-content>
                                <v-list-item-title v-html="data.item.name"/>
                            </v-list-item-content>
                        </template>
                    </template>
                </v-select>
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
    name: "OrderService",
    // data
    data: () => ({
        // dialog control
        dialog: false,
        // form data
        formData: {
            order_category: "",
            order_type: "",
        },
        // items
        types: [
            "Long Term Contract",
            "Medium Term Contract",
            "Short Term Contract"
        ],
        categories: [
            { header: 'Software & IT Services' },
            {
                name: "Mobile App Development"
            },
            {
                name: "Web App Development"
            },
            {
                name: "Website Development"
            },
            {
                name: "Graphic Design Services"
            },
            {
                name: "Business Management Sys"
            },
            {
                name: "IT Consultations"
            },
            { divider: true },
            { header: 'Events' },
            {
                name: "Event Planning"
            },
            {
                name: "Catering Services"
            },
            {
                name: "Sound System Services"
            },
            {
                name: "DJ Services"
            },
            { divider: true },
            { header: 'Transport' },
            {
                name: "Moving Services"
            },
            {
                name: "Shipping Services"
            },
            {
                name: "Delivery Services"
            },
            {divider: true},
            {header: "Cleaning"},
            {
                name: "House Cleaning"
            },
            {
                name: "Carpet Cleaning"
            },
            {
                name: "Clothes Washing"
            },
            {divider: true},
            {header: "Education"},
            {
                name: "Primay Teacher"
            },
            {
                name: "High School Teacher"
            },
            {divider: true},
            {header: "Other"},
            {
                name: "Internal Design Services"
            },
            {
                name: "Tatoo Drawing"
            },
            {
                name: "Baking Services"
            },
            {
                name: "Hair Styling Services"
            },
        ]
    }),

    methods: {
        submit() {
            this.$emit('save-service-data', this.formData)
        },
    }
  }
</script>