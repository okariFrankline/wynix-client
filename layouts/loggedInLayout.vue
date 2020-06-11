<template>
  <v-app color="#3cd1c2">
    <!-- Side navigation -->
    <v-navigation-drawer v-model="drawer" app>
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
    <v-app-bar app color="indigo" dark>
        <!-- Side navigation bar drawer button -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <!-- End of app bar -->

    <!-- The main app's content -->
    <v-content>
      <v-container class="fill-height" fluid>
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