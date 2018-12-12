<template>
    <v-container fluid fill-height class="login">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5 grey darken-3">
                    <v-toolbar-title class="white--text">
                        <h4>Welcome Back</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="E-mail" outline color="secondary" v-model="email" :rules="emailRules" required/>
                                <v-text-field label="Password" outline color="secondary" v-model="password" :rules="passwordRules" min="8"
                                 :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter/><!-- prepend-icon="visibility"-->
                                <v-layout justify-space-between>

                                    <v-btn @click="submit" :class="{'grey darken-3 white--text':valid,disabled:!valid}">
                                        Login
                                    </v-btn>

                                    <v-btn @click="clear">
                                        Forgot Password?
                                    </v-btn>
                                </v-layout>
                            </v-form>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {

            e1: true,
            valid: false,
            password: "",
            email: "",
            passwordRules: [(v) => !!v || "Password is required"],
            emailRules: [(v) => !!v || "Email is required",
                (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]

        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('login').then(() => {
                    this.$router.push("/home");
                }, error => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                })
            }
        },
        clear() {
            this.$refs.form.reset();
        }
    }
}
</script>
<style scoped>
.login{
    background-color: gray;
}
</style>

