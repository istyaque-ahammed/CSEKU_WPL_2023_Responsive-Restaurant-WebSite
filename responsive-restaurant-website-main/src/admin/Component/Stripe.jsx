import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Nz6mCBwDyAJHsE8D2JcHzB0rHKQz2dSekiZ4zODYEDlwxWePiHE5eVYts9pA8SHq3AmS0nQMNtwB7Ye5Y7OoYUI00J4eJfQzW"); // Replace with your Stripe public key
