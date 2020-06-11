<template>
  <v-app class="grey lighten-2">
    <!-- Side navigation -->
    <v-navigation-drawer v-model="drawer" app class="grey lighten-2">
        <v-row class="avatar-row mt-2">
          <div class="col">
            <v-avatar size="150" class="mb-3">
              <img src="/images/avatar-1.png" class="grey lighten-1">
            </v-avatar>

            <!-- Username -->
            <p class="white--text">Frankline Okari</p>
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
    <v-app-bar app class="teal accent-4" dark flat>
        <!-- Side navigation bar drawer button -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
        
        <!-- Application brand -->
        <v-toolbar-title>Wynix</v-toolbar-title>
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
    <v-content>
      <v-container fluid>
        <!-- Main content goes here -->
        <nuxt />
        <!-- End of main content -->
      </v-container>
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