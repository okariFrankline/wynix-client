<!-- Displays a list of all the available order, quotations, proposals -->
<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard mt-3" style="margin-bottom: -2em;">
        
        <h1 class="subtitle-1 grey--text mb-5">
            <v-icon left class="grey--text">business_center</v-icon>
            <span>
                {{ `Details for order ${this.$route.params.order}` }}
            </span>
        </h1>

        <!-- content of the dashboard -->
        <v-container class="my-5" >
            <v-row>
                <!-- Column for the details -->
                <v-col cols="12" md="4">
                    <v-card flat>
                        <v-card-title class="grey dense">
                            <span class="caption">Order Summary</span>
                        </v-card-title>

                        <v-card-text>
                            <div>
                                <div class="caption grey--text font-italic">Order Type</div>
                                <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                    Mobile App Development
                                </div>
                            </div>

                            <div>
                                <div class="caption grey--text font-italic">Order Type</div>
                                <div class="caption mt-2 font-weight-bold blue--text tex-lighten-2">
                                    Mobile App Development
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <!-- End of colum for details -->

                <!-- Column for the description -->
                <v-col cols="12" md="8">
                    <v-card class="overflow-y-auto pa-2" flat max-height="400">
                        <v-card-title 
                            
                            class="teal accent-4 ">
                            <span class="caption white--text font-weight-bold">Order Summary</span>
                        </v-card-title>

                        <v-card-text 
                            
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat reprehenderit, fugit dolores natus molestiae molestias exercitationem eligendi? Dolores nemo dolorem iusto, quasi saepe architecto amet nam, illo beatae sequi ipsam, corporis suscipit commodi illum ea iste sapiente! Quia ratione alias porro aperiam iusto repellat sed ipsa consequuntur ducimus aut illo fugit, cumque quidem asperiores maxime dolore nobis consectetur a cupiditate adipisci? Impedit, consequuntur. Nesciunt iusto expedita natus alias enim vel assumenda provident non recusandae porro rem neque quidem deleniti nostrum fugiat ea quibusdam similique minima, quod voluptas officia. Aut minus tenetur, laborum quam doloremque necessitatibus, voluptatibus accusantium debitis, ipsum reprehenderit est autem! Vero nobis aliquam harum similique aspernatur exercitationem porro, sapiente alias dolor iure perspiciatis fugit, aperiam ducimus voluptatum totam corrupti quo. Ratione suscipit totam unde velit maxime, illo labore nihil ipsam, accusamus, doloremque ab aliquam! Eaque illo eius quae, ipsam alias sunt cupiditate dicta aliquid maiores provident voluptatibus. Facilis atque totam adipisci sed ipsa, ut maxime rem necessitatibus debitis doloremque, sit mollitia, asperiores ea voluptate. Odio debitis doloribus, aliquam corporis distinctio ullam illum incidunt consequatur numquam nisi vero et nesciunt quidem ipsum. Dolores aspernatur iusto ut unde veritatis eveniet id amet, eius cum nemo dolorem! Earum amet nesciunt quae similique alias, porro quam veniam veritatis aspernatur officiis id atque perferendis repellendus a rem! Aliquam reprehenderit hic, recusandae quas, optio iusto neque, corrupti consequuntur reiciendis vitae molestiae aperiam quis consequatur repudiandae perferendis eveniet earum facilis eos dolore provident? Deserunt, eum culpa unde itaque dolores accusamus et id magnam quis aperiam provident amet totam dolorum iste labore assumenda at nulla nobis omnis corrupti. Obcaecati sit, sequi tempore eum nemo ducimus, soluta impedit vero inventore veritatis commodi fugiat quo. Dolor enim vel impedit nihil soluta non culpa laudantium, voluptatem iste, esse debitis hic placeat sapiente quisquam laborum temporibus mollitia cupiditate quod odit pariatur ipsa fugit est repellendus. Natus ea voluptatum sunt adipisci eveniet fugiat maxime delectus excepturi culpa dicta atque quisquam eum minima repellat animi, deserunt eos rerum exercitationem doloremque ipsa nisi recusandae aliquam voluptate blanditiis! Perspiciatis earum dolorum quam officia enim voluptatibus saepe sunt doloribus, et libero sequi nisi ducimus ut debitis assumenda quidem, cum placeat dicta! Nobis doloremque quisquam, repudiandae et asperiores alias dolor illo, inventore tempore qui ea beatae pariatur earum minus blanditiis atque quos dicta enim architecto incidunt id nulla similique sit est. Dolor, nam assumenda qui rem aliquam facere ex, molestiae magnam cum distinctio odit modi quisquam quia suscipit asperiores iusto est exercitationem ab minima id reiciendis dolorum! Quo excepturi consectetur velit ipsum quis odio voluptates eligendi assumenda corporis. Repellendus exercitationem, sed odit at assumenda quia id aperiam similique, tempore officia officiis deleniti illo sunt qui. Fuga nesciunt commodi placeat quis nam mollitia inventore optio sit provident repellendus consequuntur repellat eaque, vero minus cumque, laborum, veritatis beatae. Delectus sequi similique, amet vitae possimus, beatae pariatur quidem cum quia doloribus voluptatem tempora rem atque impedit, eveniet dolorum? Repellat laudantium fuga incidunt sed minus praesentium quibusdam culpa doloribus recusandae, ad dolorum. Corrupti eaque obcaecati vel voluptatum quam officia2
                        </v-card-text>
                    </v-card>
                </v-col>
                <!-- End of column for the description -->

            </v-row>
 
        </v-container>
    </div>
</template>

<script>
export default {
  layout: "loggedInLayout",
    data: () => ({
        menu: false,
        description: "",
    }),
    methods: {

        random_border_class() {
            const colors = [
                "orange-borders",
                "tomato-borders",
                "lime-borders",
                "pink-borders"
            ]

            return colors[Math.floor(Math.random() * colors.length)]
        },

        sort_by_category() {
             // set the snackbar_category to false
            this.snackbar_category = false
            // set the category from the form data
            const category = this.formData.sort_category
            //this.snackbar_type === true ? false : false 
            let sorted_by_category = this.projects.filter((project) => project.order_category == category)
            //console.log(sorted_by_category)
            this.projects = sorted_by_category
        },

        onScroll (e) {
            e.target.scrollTop
        },

    },
}
</script>


<style>
    .project {
        border-bottom: 5px solid #00BFA5 !important;    
    }

</style>