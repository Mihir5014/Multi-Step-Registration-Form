#  Multi-Step User Registration Form

A clean and responsive multi-step registration form built using **React**, **Redux Toolkit**, and **Tailwind CSS**. The form captures user input across multiple steps, handles validation with **Formik** and **Yup**, uses **Redux Toolkit** for global state management, and resets after successful submission.

---

##  Features

-  Multi-step form with smooth transitions
-  Global state management via **Redux Toolkit**
-  Client-side validation using **Formik** and **Yup**
-  Data persists across steps via global state
-  Form data resets after successful submission
-  Styled with **Tailwind CSS** for a modern UI
-  Navigation using **React Router**

---

##  Form Steps Overview

###  Step 1: Personal Information
- First Name
- Last Name
- Email Address  
 **Next** button (enabled only when all fields are valid)

---

###  Step 2: Address Information
- Street Address
- City
- State
- Zip Code  
 **Back** and **Next** buttons

---

###  Step 3: Account Creation
- Username
- Password  
 **Back** and **Submit** buttons  
 On submit: logs the complete form data to the console and resets the form

---

##  Tech Stack

| Tech             | Purpose                            |
|------------------|-------------------------------------|
| React            | UI Library                         |
| Redux Toolkit    | Global state management            |
| React Redux      | Connects Redux to React            |
| Formik           | Form state and handling            |
| Yup              | Form validation                    |
| React Router     | Navigation between steps           |
| Tailwind CSS     | Utility-first CSS framework        |

---

