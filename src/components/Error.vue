<template>
  <v-container fluid grid-list-lg >
    <v-flex xs12 >
      <v-card color="white" class="black--text">
        <v-layout>
          <v-flex xs2>
              <v-icon class="icon" >insert_drive_file</v-icon>
          </v-flex>
          <v-flex xs10>
            <v-card-title primary-title>
              <div>
                <div class="headline">#Error</div>
                <div>
                  <blockquote>
                    <p>Sorry, we could't find any joke</p>
                  </blockquote>
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
    name: 'Error'
}
</script>

<style scoped>

blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 1.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

blockquote p {
  display: inline;
}

.red {
  color: red;
}

.grey {
  color: grey;
}
.icon {
  font-size: 150px;
    color: red;
}

</style>
