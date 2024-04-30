<script setup>
  import { ref } from 'vue';
  import CustomInput from '@/components/UI/CustomInput/CustomInput.vue';
  import CustomTextarea from '@/components/UI/CustomTextarea/CustomTextarea.vue';
  import CustomSelect from '@/components/UI/CustomSelect/CustomSelect.vue';

  const roleOptions = [
    {name: 'Студент', value: 1},
    {name: 'Школьник', value: 2}
  ];

  const loginInput = ref('');
  const passInput = ref('');
  const descriptionInput = ref('');
  const userRole = ref('');

  const clearForm = () => {
    loginInput.value = '';
    passInput.value = '';
    descriptionInput.value = '';
    userRole.value = '';
  };
</script>

<template>
  <CustomInput
    v-model="loginInput"
    name="login"
    placeholder="Type login here..."
    label="Login:"
  />
  <br/>
  <CustomInput
    v-model="passInput"
    name="password"
    placeholder="Enter password..."
    label="Password:"
    type="password"
  />
  <br/>
  <CustomTextarea
    v-model="descriptionInput"
    name="description"
    placeholder="Some text..."
    label="Description:"
  />

  <CustomSelect
    v-model="userRole"
    name="role"
    :options="roleOptions"
  />


  <div>
    <h3>Result:</h3>
    <p>Login: {{ loginInput }}</p>
    <p>Password: {{ passInput }}</p>
    <p>Description: {{ descriptionInput }}</p>
    <p>Role: {{ userRole }}</p>

    <button @click="clearForm" class="border">Clear</button>
  </div>
</template>
