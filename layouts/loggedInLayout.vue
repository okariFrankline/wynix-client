<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}" style="min-height: 100vh;"> 
    <!-- Side navigation -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-toolbar flat color="grey lighten-3">
        <v-toolbar-title class="ml-4">
          <v-icon left>home</v-icon>
          <span class="subtitle">wynix.com</span>
        </v-toolbar-title>
      </v-toolbar>

      <!-- list of links aound the app -->
        <v-list dense>
          <!-- TO available orders -->
          <v-list-item nuxt to="/orders/available" style="text-decoration: none;">
            <v-list-item-action>
              <v-icon>business_center</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Available Orders
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <!-- TO available orders -->
          <v-list-item >
 
            <v-list-item-content>
              <v-list-item-title>
               <OrderServices /> 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->
        </v-list>
      <!-- end of lis of links -->
    </v-navigation-drawer>
    <!--  End of side navigation bar -->

    <!-- App Bar -->
    <v-app-bar app class="teal accent-4" dark flat>
        <!-- Side navigation bar drawer button -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
        
        <!-- Application brand -->
        <v-toolbar-title>
          <v-icon left small>account_circle</v-icon>
          <span class="font-weight-bold body-2 white--text tex-darken-4">Okarifrank</span>
        </v-toolbar-title>
        <!-- End of appication brand -->

        <v-spacer></v-spacer>
        <!-- Button for signing out -->
        <v-btn text dark>
          <span class="text-lowercase">Log out</span>
          <v-icon right small>
            exit_to_app
          </v-icon>
        </v-btn>
        <!-- End of button for signing out -->
    </v-app-bar>
    <!-- End of app bar -->

    <!-- The main app's content -->
    <v-content class="mx-5">
        <!-- Main content goes here -->
        <nuxt />
        <!-- End of main content -->
    </v-content>
    <!--  End of the app's main content -->

  </v-app>
</template>

<!-- Script for the loggedInLayout -->
<script>
  import OrderServices from "~/components/order/popups/OrderServices"
  export default {
      // name
      name: "LoggedInLayout",
      components: {OrderServices},
      // data
      data: () => ({
          
          drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts', to: "/orders/available"},
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },

        { icon: 'mdi-cog', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },


      ],
      })
  }
</script>

<style lang="css">
  .avatar-row {
    margin-left: 1.5em;
  }
</style>