<template>
  <div>
    <div class="py-3 text-center">
      <div class="font-sans text-4xl font-bold text-text-blue">
        <p>Contáctanos</p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="1">
        <div class="flex flex-col py-3 my-3">
          <label for="name" class="font-sans text-lg font-bold text-text-blue"
            >Nombre y apellido</label
          >
          <div class="h-12">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingresa tu nombre"
              v-model.trim="$v.name.$model"
              form="contactform"
              class="w-full h-full border border-gray-300 icon_name rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100"
            />
            <div v-if="$v.name.$error">
              <div class="text-xs text-red-500" v-if="!$v.name.required">
                El nombre es requerido
              </div>
              <div class="text-xs text-red-500" v-if="!$v.name.minLength">
                Mínimo {{ $v.name.$params.minLength.min }} letras
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col py-3 my-3">
          <label for="email" class="font-sans text-lg font-bold text-text-blue"
            >Correo electrónico</label
          >
          <div class="h-12">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              v-model.trim="$v.email.$model"
              form="contactform"
              class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_mail"
            />
            <div v-if="$v.email.$error">
              <div class="text-xs text-red-500" v-if="!$v.email.required">
                El email es requerido
              </div>
              <div class="text-xs text-red-500" v-if="!$v.email.email">
                Email inválido, correo@ejemplo.com (todo en minúsculas)
              </div>
            </div>
          </div>
        </div>

        <div class="py-3 my-3">
          <label for="phone" class="font-sans text-lg font-bold text-text-blue"
            >Teléfono</label
          >
          <div class="relative flex-col h-12 rounded-md">
            <div
              v-if="phone"
              class="absolute inset-y-0 left-0 flex items-center pl-12 pointer-events-none"
            >
              <span class="font-bold text-hover-blue" style="font-size: 17px">
                +56
              </span>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              v-model.trim="$v.phone.$model"
              :class="{ padl_phone: phone }"
              class="w-full h-full pl-12 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_phone"
              placeholder="Ingresa tu teléfono"
            />
            <div>
              <div v-if="$v.phone.$error">
                <div class="text-xs text-red-500" v-if="!$v.phone.required">
                  El teléfono es requerido
                </div>
                <div class="text-xs text-red-500" v-if="!$v.phone.valphone">
                  Teléfono inválido, ingresa 9 dígitos
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:py-3 lg:my-3">
          <label for="comuna" class="font-sans text-lg font-bold text-text-blue"
            >Comuna</label
          >
          <div class="h-12">
            <v-select
              :options="comunas"
              v-model.trim="$v.comuna.$model"
              class="style-chooser"
            >
              <div slot="no-options">Lo siento, comuna inválida</div>
            </v-select>
            <div v-if="$v.comuna.$error">
              <div class="text-xs text-red-500" v-if="!$v.comuna.required">
                La comuna es requerida
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col 2">
        <div class="lg:py-3 lg:my-3">
          <label for="name" class="font-sans text-lg font-bold text-text-blue"
            >Tipo de proyecto</label
          >
          <div class="h-12">
            <v-select
              :options="proyectos"
              v-model="proyecto"
              class="style-chooser"
            >
              <div slot="no-options">Lo siento, tipo de proyecto inválido</div>
            </v-select>
            <div v-if="$v.proyecto.$error">
              <div class="text-xs text-red-500" v-if="!$v.proyecto.required">
                Selecciona el tipo del proyecto
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between h-full py-3 my-3">
          <div class="">
            <label
              for="comment"
              class="font-sans text-lg font-bold text-text-blue"
              >Comentario</label
            >

            <div class="">
              <textarea
                rows="4"
                cols="50"
                name="comment"
                v-model="comment"
                id="comment"
                form="contactform"
                class="w-full h-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100"
              />
            </div>
          </div>
          <div class="">
            <p class="text-green-500" v-if="submitStatus === 'OK'">Enviado!</p>
            <p class="text-red-500" v-if="submitStatus === 'ERROR'">
              Por favor verifica todos los campos.
            </p>
            <p class="text-text-blue" v-if="submitStatus === 'PENDING'">
              Enviando...
            </p>
          </div>

          <div class="">
            <form
              @submit.prevent="checkForm"
              action="/something"
              method="post"
              novalidate="true"
              id="contactform"
              class=""
            >
              <input type="submit" value="Enviar" class="btn btn-blue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import { firebase, db, auth } from "@/plugins/firebase.js";

import comunas_data from "~/assets/comunas_data.json";
import { required, minLength, email, helpers } from "vuelidate/lib/validators";

const valphone = helpers.regex("valphone", /^\d{9}$/);

export default {
  data() {
    return {
      comunas: [],
      proyectos: ["CONDOMINIO", "EDIFICIO", "ESTACIÓN DE SERVICIO", "BODEGA"],
      name: null,
      email: null,
      phone: null,
      comuna: null,
      proyecto: null,
      comment: null,
      submitStatus: null,
    };
  },
  validations: {
    name: { required, minLength: minLength(4) },
    email: { required, email },
    phone: { required, valphone },
    comuna: { required },
    proyecto: { required },
  },

  methods: {
    checkForm() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("error");
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        var formulario = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          comuna: this.comuna,
          proyecto: this.proyecto,
          comment: this.comment,
        };

        var estatus = this.send_mail(formulario);
        if (estatus.error) {
          console.error("error send");
        }

        this.submitStatus = "OK";
      }
    },
    comunaslist: function () {
      var lista = [];
      comunas_data.forEach((element) => {
        element["comunas"].forEach((element) => {
          lista.push(element.toUpperCase());
        });
      });
      this.comunas = lista.sort();
    },
    setName(value) {
      this.name = value;
      console.log("hola");
      this.$v.name.$touch();
    },
    async send_mail(formulario) {
      try {
        var quote = await db.collection("mail").add({
          form: formulario,
          to: ["obedmacallums@gmail.com"],
          message: {
            subject: "Hello from Firebase!",
            html: `Nombre: ${formulario.name}<br>

                      Telefono: ${formulario.phone}<br>

                      Email: ${formulario.email}<br>

                      Comuna: ${formulario.comuna}<br>

                      Tipo de proyecto: ${formulario.proyecto}<br>

                      Comentario: ${formulario.comment}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    async signIn() {
      try {
        var sign = await auth.signInAnonymously();
        //console.log(sign)
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.signIn();
    //auth.onAuthStateChanged(firebaseUser => console.log("firebaseUser"))
  },
  mounted() {
    this.comunaslist();
  },
};
</script>

<style>
.style-chooser .vs__dropdown-toggle {
  height: 3rem;
  border-radius: 0.75rem;
}

.style-chooser:focus-within .vs__dropdown-toggle:focus-within {
  height: 3rem;
  border-radius: 0.75rem;
  border-color: #4299e1;
  background-color: #f7fafc;
}

.style-chooser .vs__dropdown-menu,
.style-chooser .vs__search::placeholder {
  border-radius: 0.75rem;
  background-color: #f7fafc;
}

.icon_mail {
  background: url("~assets/img/mail.svg") no-repeat scroll 5px 5px;
  padding-left: 45px;
}

.icon_name {
  background: url("~assets/img/name.svg") no-repeat scroll 5px 5px;
  padding-left: 45px;
}

.icon_phone {
  background: url("~assets/img/phone.svg") no-repeat scroll 5px 5px;
  padding-left: 45px;
  background-position-y: center;
}

.padl_phone {
  padding-left: 83px;
}

.icon_comuna {
  background: url("~assets/img/comuna.svg") no-repeat scroll 5px 5px;
  padding-left: 40px;

  background-position-y: center;
}

.styled-select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

.icon_arrow {
  background: url("~assets/img/arrow.svg") no-repeat scroll 5px 5px;
  background-position-x: 98%;
  background-position-y: center;
  padding-right: 5px;
  padding-left: 5px;
}
</style>
