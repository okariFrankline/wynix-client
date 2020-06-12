<template>
  <v-app style="background-color: #f7f8fb !important;">
    <!-- Side navigation -->
    <v-navigation-drawer v-model="drawer" app class="grey lighten-2">
        <v-row class="avatar-row mt-1">
          <div class="col">
            <v-avatar size="150" class="mb-3">
              <img src="/images/avatar-1.png" class="grey lighten-1">
            </v-avatar>

            <!-- Username -->
            <div>
              <v-chip class="blue lighten-2" style="margin-left: .4em;">
                <span class="mx-3 text-center white--text darken-4">okarifrank5678</span>
              </v-chip>
            </div>
          </div>
        </v-row>
        <!-- Navigation Link -->
        <v-list dense>
            <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <!--  End of side navigation bar -->

    <!-- App Bar -->
    <v-app-bar app class="teal accent-4" dark flat dense>
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
  export default {
      // name
      name: "LoggedInLayout",
      // data
      data: () => ({
          drawer: null,
      })
  }
</script>

<style lang="css">
  .avatar-row {
    margin-left: 1.5em;
  }
</style>