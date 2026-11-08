<script setup>
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");

// controls when password validation errors are displayed
const showErrors = ref(false);

// check the password against all six requirements
const passwordErrors = computed(() => {
  const errors = [];
  const value = password.value;

  // password must be between 8 and 14 characters long
  if (value.length < 8 || value.length >= 15) {
    errors.push("Password must contain 8–14 characters");
  }

  // password must contain at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
    errors.push("Include at least one uppercase letter");
  }

  // password must contain at least two lowercase letters
  if ((value.match(/[a-z]/g) || []).length < 2) {
    errors.push("Include at least two lowercase letters");
  }

  // password must contain at least one number
  if (!/[0-9]/.test(value)) {
    errors.push("Include at least one number");
  }

  // password must start with an uppercase letter
  if (!/^[A-Z]/.test(value)) {
    errors.push("Password must start with an uppercase letter");
  }

  // password must contain an underscore
  if (!value.includes("_")) {
    errors.push('Include the character "_"');
  }

  // returns all requirements that were not satisfied
  return errors;
});

// validates the password when the form is submitted
function submitForm() {
  showErrors.value = true;

  // shows a success message if all requirements are met
  if (passwordErrors.value.length === 0) {
    alert("Password is valid!");
  }
}
</script>

<template>
  <main class="signup-page">
    <h1>Sign Up</h1>

    <!-- Signup form -->
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <!-- Email input -->
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="form-row">
        <!-- Password input -->
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <!-- Display all failed password requirements -->
      <div v-if="showErrors && passwordErrors.length > 0" class="error-message">
        <p>Password is not valid:</p>

        <ul>
          <li v-for="error in passwordErrors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>

      <!-- Submit the signup form -->
      <button type="submit">Sign Up</button>
    </form>
  </main>
</template>

<style scoped>
/* Center the signup form */
.signup-page {
  width: 100%;
  max-width: 460px;
  margin: 15px auto;
  padding: 16px 24px;
  box-sizing: border-box;
}

h1 {
  margin-top: 0;
  margin-bottom: 16px;
  text-align: center;
}

/* Arrange form elements vertically */
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background-color: #eaf0df;
  border-radius: 18px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

label {
  width: 90px;
  flex-shrink: 0;
  color: #25283f;
  font-size: 16px;
}

/* Style the input fields */
input {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  background-color: white;
  color: #25283f;
}

input:focus {
  outline: 2px solid #468065;
  outline-offset: 1px;
}

/* Style the signup button */
button {
  align-self: center;
  margin-top: 8px;
  padding: 10px 28px;
  background-color: #468065;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #35694f;
}

/* Highlight password validation errors */
.error-message {
  color: #b42318;
  font-size: 14px;
}

.error-message ul {
  padding-left: 24px;
}

@media (max-width: 480px) {
  .signup-page {
    padding: 16px;
  }

  form {
    padding: 18px;
  }

  .form-row {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  label {
    width: auto;
  }
}
</style>
