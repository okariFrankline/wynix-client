<template>
  <div class="team mt-3">
        <v-row class="mb-1 mx-5">
            <h1 class="subtitle-1 grey--text mb-5">
                <v-icon left class="grey--text">photo_library</v-icon>
                <span>Catalog for practise dhjsa8H6</span>
            </h1>
            
                <v-spacer></v-spacer>

                <div>
                    <ItemForm @save-catalog-data="uploadItem" />
                </div> 
            </v-row>
        

    <v-container class="mx-2">

      <v-row wrap>
        <!-- start of card -->
            <v-col sm=6 cols=12 md=6 lg=3 class="">
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344">
                        <v-img
                            :aspect-ratio="16/9"
                            src="/images/tatoo3.jpg"
                        ></v-img>

                    <v-card-title class="mt-n3">
                        <div>
                            <span class="body-1">Cafe Badilico</span>
                        </div>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col sm=6 cols=12 md=6 lg=3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344">
                        <v-img
                            :aspect-ratio="16/9"
                            src="/images/tatoo2.jpg"
                        ></v-img>

                    <v-card-title class="mt-n3">
                        <div>
                            <span class="body-1">Cafe Badilico</span>
                        </div>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col sm=6 cols=12 md=6 lg=3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344">
                        <v-img
                            :aspect-ratio="16/9"
                            src="/images/tatoo.jpg"
                        ></v-img>

                    <v-card-title class="mt-n3">
                        <div>
                            <span class="body-1">Cafe Badilico</span>
                        </div>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col sm=6 cols=12 md=6 lg=3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344">
                        <v-img
                            :aspect-ratio="16/9"
                            src="/images/tatoo4.jpg"
                        ></v-img>

                    <v-card-title class="mt-n3">
                        <div>
                            <span class="body-1">Cafe Badilico</span>
                        </div>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col sm=6 cols=12 md=6 lg=3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="344">
                        <v-img
                            :aspect-ratio="16/9"
                            src="/images/tatoo5.jpg"
                        ></v-img>

                    <v-card-title class="mt-n3">
                        <div>
                            <span class="body-1">Cafe Badilico</span>
                        </div>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>

        <!-- end of card -->
        </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemForm from "~/components/catalog/ItemForm"

export default {
    // layout
    layout: "loggedInLayout",
    // name
    name: 'catalog',
    // components
    components: {
        ItemForm
    },
    // data
  data : () => ({
    team: [
      {name: 'Iyad', role: 'web developer', avatar:'/img1.png'},
      {name: 'Reda', role: 'Graphic designer', avatar:'/img2.png'},
      {name: 'Zineb', role: 'web developer', avatar:'/img3.png'},
      {name: 'Hu TechGroup', role: 'Desktop developer', avatar:'/img4.png'},
    ]
  }),

  // methods
  methods: {
      uploadItem(data) {
          console.log(data)
      }
  }
}
</script>