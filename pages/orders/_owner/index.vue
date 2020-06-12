<!-- Displays a list of orders owned by a given user -->
<template>
    <div class="dashboard">
        <h1 class="subtitle-1 grey--text">Dashboard</h1>

        <!-- content of the dashboard -->
        <v-container class="my-5">
            <!-- Sorting buttons -->
            <v-row class="mb-3 ml-5">
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs}">
                        <v-btn text color="gray" v-on="on" v-bind="attrs"> 
                            <v-icon left small>folder</v-icon>
                            <span class="text-lowercase caption">By Project</span>
                        </v-btn>
                    </template>
                    
                    <span>Sort projects by project name</span>
                </v-tooltip>
                

                <v-tooltip top>
                    <template v-slot:activator="{on, attrs}"> 
                        <v-btn text color="gray" v-on="on" v-bind="attrs"> 
                            <v-icon left small>person</v-icon>
                            <span class="text-lowercase caption">By Person</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by person</span>
                </v-tooltip>
            </v-row>

            <v-card flat hover ripple class="mb-1" v-for="project in projects" :key="project.id" :class="`project ${project.status}`">
                <v-row class="px-3">
                    <v-col cols="12" md="6">
                        <div class="caption grey--text">Project Title</div>
                        <div class="body-1">
                            {{ project.title }}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Person</div>
                        <div>
                            {{ project.person }}
                        </div>
                    </v-col>

                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Due Date</div>
                        <div>
                            {{ project.date}}
                        </div>
                    </v-col>
                    
                    <v-col cols="6" sm="4" md="2">
                        <div class="right">
                            <v-chip small class="my-2 white--text" :color="chip_color(project.status)">
                                {{project.status}}
                            </v-chip>
                        </div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
            
        </v-container>
    </div>
</template>

<script>
export default {
  layout: "loggedInLayout",
    data: () => ({
        projects: [
            {   
                id: 1,
                title: "Create Website",
                person: "Frankline Okari",
                date: "2nd May 20120",
                status: "ongoing"
            },
            {   
                id: 2,
                title: "Create Mobile App",
                person: "Paul Okari",
                date: "2nd May 20120",
                status: "complete"
            },
            {   
                id: 3,
                title: "Analyse App Performance",
                person: "Frankline Njoroge",
                date: "2nd May 20120",
                status: "overdue"
            },
            {   
                id: 4,
                title: "Test Website",
                person: "Donna Njoki",
                date: "2nd May 20120",
                status: "ongoing"
            }
        ]
    }),
    methods: {
        chip_color(status) {
            if (status == "complete") {return "#3cd1c2"}
            if (status == "ongoing") {return "orange"}
            return "#f83e70"
        }
    }
}
</script>

<style>
    .project.complete {
        border-left: 4px solid #3cd1c2;
        border-right: 4px solid #3cd1c2;
        border-bottom: 1px solid #3cd1c2;
    }
    .project.overdue {
        border-left: 4px solid tomato;
        border-right: 4px solid tomato;
        border-bottom: 1px solid tomato;
        
    }
    .project.ongoing {
        border-left: 4px solid orange;
        border-right: 4px solid orange;
        border-bottom: 1px solid orange;
    }
</style>