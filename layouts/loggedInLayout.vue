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
        <v-list dense subheader rounded>
           

          <v-subheader inset style="margin-left: -.1em;">
            <span class="font-weight-bold body-2">Orders</span>
          </v-subheader>
          <!-- TO available orders -->
          <v-list-item nuxt to="/orders/available" style="text-decoration: none;" exact class="mt-n2">
            <v-list-item-action>
              <v-icon small>launch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Browse Contracts
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <v-divider class="mt-3"></v-divider>
          <!-- End of available orders -->
          <v-subheader inset style="margin-left: -.1em;">
            <span class="font-weight-bold body-2">Practise</span>
          </v-subheader>
          <!-- TO available orders -->
          <v-list-item nuxt to="/practise/frank" style="text-decoration: none;" exact class="mt-n2">
            <v-list-item-action>
              <v-icon small>launch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                My Practise
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <!-- TO available orders -->
          <v-list-item nuxt to="/practise/frank/assigned" style="text-decoration: none" exact class="mt-n2">
            <v-list-item-action>
              <v-icon small>subject</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Assigned Orders
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <!-- TO available orders -->
          <v-list-item nuxt to="/practise/frank/bids" style="text-decoration: none" class="mt-n2">
            <v-list-item-action>
              <v-icon small>playlist_add_check</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                My Bids
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <!-- TO available orders -->
          <v-list-item nuxt to="/practise/frank/catalog" style="text-decoration: none" class="mt-n2" exact>
            <v-list-item-action>
              <v-icon small>photo_library</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                My Catalog
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          

          <v-divider class="mt-2"></v-divider>

          <v-subheader inset style="margin-left: -.1em;">
            <span class="font-weight-bold body-2">Transactions</span>
          </v-subheader>
          <!-- TO available orders -->
          <v-list-item nuxt to="/practise/frank/tokens" style="text-decoration: none" exact class="mt-n2">
            <v-list-item-action>
              <v-icon small>receipt_long</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="caption">
                My Tokens
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->

          <!-- TO available orders -->
          <v-list-item nuxt to="/transaction/frank" style="text-decoration: none" class="mt-n2">
            <v-list-item-action>
              <v-icon small>history</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                History
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End of available orders -->
          

        </v-list>

        <template v-slot:append>
        <div class="pa-2">
          <NewOrder />
        </div>
      </template>
      <!-- end of lis of links -->
    </v-navigation-drawer>
    <!--  End of side navigation bar -->

    <!-- App Bar -->
    <v-app-bar app class="teal accent-4" dark flat>
        <!-- Side navigation bar drawer button -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
        
        <!-- Application brand -->
        <v-toolbar-title>
          <v-avatar class="mr-3 ml-n3 elevation-2">
            <img src="/images/person.jpg" class="grey lighten-2">
          </v-avatar>
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
  import NewOrder from "~/components/order/New/NewOrder"
  export default {
      // name
      name: "LoggedInLayout",
      components: {NewOrder},
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